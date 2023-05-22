import {Link} from "react-router-dom";
import {fetchCategories} from "../utils/apiCalls";
import {useContext} from "react";
import {StoreContext} from "../context/StoreContext";
import {Update_Categories} from "../reducers/storeReducer";
import {Update_Category} from "../reducers/productFilterReducer";

export default function Categories() {
  const {
    categories,
    products,
    filter: {price, category, ratings, sortBy},
    dispatchFilter,
  } = useContext(StoreContext);
  return (
    <div className="grid mr-6 ml-6 mb-4 w-full">
      {categories.map((category) => {
        const {_id, categoryName, description, displayName, backgroundImage} = category;
        return (
          <div
            className="col-12 md:col-12 lg:col-4 surface-500 mt-5  h-12rem bg-cover category"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}>
            <Link
              to="/products"
              onClick={() => dispatchFilter({type: Update_Category, payload: [category]})}
              className="bg-white text-green-900 category-title cursor-pointer">
              {displayName}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
