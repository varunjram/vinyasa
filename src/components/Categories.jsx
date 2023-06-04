import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { Update_Category } from "../reducers/productFilterReducer";
import { Button } from "primereact/button";

export default function Categories() {
  const { categories, dispatchFilter } = useContext(StoreContext);
  const Navigation = useNavigate();
  return (
    <div className="grid mr-6 ml-6 mb-4 w-full">
      {categories.map((category) => {
        const { _id, displayName, backgroundImage } = category;
        return (
          <div className="col-12 md:col-12 lg:col-4 p-2 ">
            <div
              key={`${_id}-${displayName}`}
              className="w-full surface-500 mt-5  h-12rem bg-cover category"
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}>
              <Link
                to="/products"
                onClick={() => dispatchFilter({ type: Update_Category, payload: [category] })}
                className="bg-cyan-100 text-cyan-900 category-title cursor-pointer">
                {displayName}
              </Link>
              <Button
                label="Shop Now"
                icon="bi bi-arrow-right"
                iconPos="right"
                text
                className={`shop-now text-xl font-medium ${
                  displayName === "Womans" ? "text-orange-700" : null
                }`}
                onClick={() => {
                  dispatchFilter({ type: Update_Category, payload: [category] });
                  Navigation("/products");
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
