import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { Update_Category } from "../reducers/productFilterReducer";

export default function Categories() {
  const { categories, dispatchFilter } = useContext(StoreContext);
  return (
    <div className="grid mr-6 ml-6 mb-4 w-full">
      {categories.map((category) => {
        const { _id, displayName, backgroundImage } = category;
        return (
          <div
            key={`${_id}-${displayName}`}
            className="col-12 md:col-12 lg:col-4 surface-500 mt-5  h-12rem bg-cover category"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}>
            <Link
              to="/products"
              onClick={() => dispatchFilter({ type: Update_Category, payload: [category] })}
              className="bg-white text-green-900 category-title cursor-pointer">
              {displayName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
