import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

export default function NavSearchBar() {
  const [query, setQuery] = useState();
  const { products } = useContext(StoreContext);

  const filterByQuery = (query, products) =>
    products.filter((product) => query !== "" && product.name.includes(query));
  const filteredProducts = filterByQuery(query, products);
  return (
    <div className="nav-center">
      <BsSearch className="inline " />
      <input
        className="input pl-2"
        type="search"
        name=""
        id="search"
        placeholder="Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {filteredProducts?.length > 0 && (
        <ul className="search-result text-primary ">
          {filteredProducts?.map((product) => {
            const { _id, name, image_url } = product || {};
            return (
              <Link
                onClick={() => setQuery("")}
                to={`/product/${_id}`}
                className="search-card">
                <h4>{name}</h4>
                <img
                  src={image_url}
                  alt={name}
                  width="50px"
                  height="50px"
                />
              </Link>
            );
          })}
        </ul>
      )}
      {filteredProducts?.length === 0 && query && (
        <p className="no-results m-0 text-xl">No items to show</p>
      )}
    </div>
  );
}
