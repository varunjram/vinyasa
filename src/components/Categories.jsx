import {fetchCategories} from "../utils/apiCalls";

export default function Categories() {
  return (
    <div className="grid mr-6 ml-6 mb-4">
      <div
        className="col-4 surface-500 mt-5  h-12rem bg-cover category"
        style={{
          backgroundImage: `url('/assets/images/categories/mens.jpg')`,
        }}>
        <p className="bg-white text-green-900 category-title">MENS</p>
      </div>

      <div
        className="col-4 surface-500 mt-5  h-12rem bg-cover category"
        style={{
          backgroundImage: `url('/assets/images/categories/womens.jpg')`,
        }}>
        <p className="bg-white text-green-900 category-title">WOMANS</p>
      </div>

      <div
        className="col-4 surface-500 mt-5  h-12rem bg-cover category"
        style={{
          backgroundImage: `url('/assets/images/categories/kids.jpg')`,
        }}>
        <p className="bg-white text-green-900 category-title">KIDS</p>
      </div>
    </div>
  );
}
