import { Button } from "primereact/button";
import PriceRange from "./PriceRange";
import { Checkbox } from "primereact/checkbox";
import RadioFilter from "./RadioFilter";
import {
  Reset_Filters,
  Update_Category,
  Update_Price,
  Update_Ratings,
  Update_Sort_By,
} from "../reducers/productFilterReducer";
import { useStore } from "../context/StoreContext";

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

const ProductFilter = () => {
  const {
    categories,
    filter: { price, category, ratings, sortBy },
    dispatchFilter,
  } = useStore();
  const onCategoryChange = (e) => {
    let _selectedCategories = [...category];

    if (e.checked) _selectedCategories.push(e.value);
    else
      _selectedCategories = _selectedCategories.filter((category) => category._id !== e.value._id);

    dispatchFilter({ type: Update_Category, payload: _selectedCategories });
  };
  return (
    <section className="product-layout--filter text-cyan-900">
      <div className="flex justify-content-between">
        <p>Filters</p>
        <Button
          text
          onClick={() => dispatchFilter({ type: Reset_Filters })}
          className="text-cyan-900">
          Clear
        </Button>
      </div>
      <PriceRange
        value={price}
        onChange={(e) => dispatchFilter({ type: Update_Price, payload: e.value })}
      />
      <div>
        <p>Category</p>
        {categories?.map((_category) => {
          return (
            <div
              key={_category._id}
              className="flex align-items-center mb-1">
              <Checkbox
                inputId={_category._id}
                name="category"
                value={_category}
                onChange={onCategoryChange}
                checked={
                  category?.length ? category?.some((item) => item?._id === _category?._id) : false
                }
              />
              <label
                htmlFor={_category._id}
                className="ml-2">
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
        onChange={(e) => dispatchFilter({ type: Update_Ratings, payload: e.value })}
      />
      <RadioFilter
        Categories={sort}
        Heading={"Sort By"}
        InitialValue={sortBy}
        onChange={(e) => dispatchFilter({ type: Update_Sort_By, payload: e.value })}
      />
    </section>
  );
};

export default ProductFilter;
