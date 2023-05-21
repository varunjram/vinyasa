import React, {useContext, useState} from "react";

import {Button} from "primereact/button";
import {Checkbox} from "primereact/checkbox";

import PriceRange from "../components/PriceRange";
import {StoreContext} from "../context/StoreContext";
import RadioFilter from "../components/RadioFilter";
import ProductFilterReducer, {
  Update_Category,
  Update_Price,
  Update_Ratings,
  Update_Sort_By,
} from "../reducers/productFilterReducer";
import filterBY from "../utils/productFilterFunction";
import ProductCard from "../components/ProductCard";
import {UserContext} from "../context/UserContext";

export default function Products() {
  const {set} = useContext(UserContext);
  const {categories, products} = useContext(StoreContext);
  const {
    filter: {price, category, ratings, sortBy},
    dispatchFilter,
  } = useContext(StoreContext);
  console.log("category: ", category);
  console.log("Filter: ", sortBy);

  const onCategoryChange = (e) => {
    console.log("e: ", e);
    let _selectedCategories = [...category];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter((category) => category._id !== e.value._id);
    console.log("_selectedCategories: ", _selectedCategories);
    dispatchFilter({type: Update_Category, payload: _selectedCategories});
  };
  const rating = [
    {
      id: 1,
      name: "1star & above",
      value: 1,
    },
    {
      id: 2,
      name: "2star & above",
      value: 2,
    },
    {
      id: 3,
      name: "3star & above",
      value: 3,
    },
    {
      id: 4,
      name: "4star & above",
      value: 4,
    },
    {
      id: 5,
      name: "5star",
      value: 5,
    },
  ];
  const sort = [
    {
      id: 1,
      name: "Low to High",
      value: "Low to High",
    },
    {
      id: 2,
      name: "Hing to Low",
      value: "Hing to Low",
    },
  ];

  const filteredProducts = filterBY({products, price, category, sortBy, ratings});
  console.log("filteredProducts: ", filteredProducts);

  return (
    <main className="product-layout">
      <section className="product-layout--filter">
        <div className="flex justify-content-center">
          <Button text>Filters</Button>
          <Button text>Clear </Button>
        </div>
        <PriceRange
          value={price}
          onChange={(e) => dispatchFilter({type: Update_Price, payload: e.value})}
        />
        <div>
          <p>Category</p>
          {categories?.map((_category) => {
            return (
              <div key={_category._id} className="flex align-items-center">
                <Checkbox
                  inputId={_category._id}
                  name="category"
                  value={_category}
                  onChange={onCategoryChange}
                  checked={
                    category?.length
                      ? category?.some((item) => item?._id === _category?._id)
                      : false
                  }
                />
                <label htmlFor={_category._id} className="ml-2">
                  {_category.categoryName}
                </label>
              </div>
            );
          })}
        </div>
        <RadioFilter
          Categories={rating}
          Heading={"Ratings"}
          InitialValue={ratings}
          onChange={(e) => dispatchFilter({type: Update_Ratings, payload: e.value})}
        />
        <RadioFilter
          Categories={sort}
          Heading={"Sort By"}
          InitialValue={sortBy}
          onChange={(e) => dispatchFilter({type: Update_Sort_By, payload: e.value})}
        />
      </section>
      <section className="product-layout--display">
        <p>
          Showing All Products <small>{`( Showing ${filteredProducts.length} Products )`}</small>
        </p>
        <div className="product-layout--products">
          {filteredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
