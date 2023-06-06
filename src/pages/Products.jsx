import React, { useContext, useRef } from "react";

import { Toast } from "primereact/toast";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import SideFilterMenuMobile from "../components/SideFilterMenuMobile";
import { StoreContext } from "../context/StoreContext";
import filterBY from "../utils/productFilterFunction";

export default function Products() {
  const {
    products,
    filter: { price, category, ratings, sortBy },
  } = useContext(StoreContext);

  const toast = useRef(null);

  const filteredProducts = filterBY({ products, price, category, sortBy, ratings });

  return (
    <main className="product-layout">
      <Toast
        ref={toast}
        position="bottom-right"
      />
      <SideFilterMenuMobile />
      <div className="filter-container">
        <ProductFilter />
      </div>
      <section className="product-layout--display">
        <p className="lg:text-left text-center">
          Showing All Products <small>{`( Showing ${filteredProducts.length} Products )`}</small>
        </p>
        <div className="product-layout--products">
          {filteredProducts.map((product) => (
            <ProductCard
              product={product}
              key={product?._id}
              toast={toast}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
