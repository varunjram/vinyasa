const ProductFilterReducer = (state, {type, payload}) => {
  switch (type) {
    case "Update_Price":
      return {...state, price: payload};
    case "Update_Category":
      return {...state, category: payload};
    case "Update_Ratings":
      return {...state, ratings: payload};
    case "Update_Sort_By":
      return {...state, sortBy: payload};

    default:
      throw new Error(`${type} - No such functions exists`);
  }
};

const Update_Price = "Update_Price";
const Update_Category = "Update_Category";
const Update_Ratings = "Update_Ratings";
const Update_Sort_By = "Update_Sort_By";

export {Update_Price, Update_Category, Update_Ratings, Update_Sort_By};

export default ProductFilterReducer;
