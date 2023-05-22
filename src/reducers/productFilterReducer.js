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
    case "Reset_Filters":
      return {
        price: 0,
        category: [],
        ratings: {},
        sortBy: {},
      };

    default:
      throw new Error(`${type} - No such functions exists`);
  }
};

const Update_Price = "Update_Price";
const Update_Category = "Update_Category";
const Update_Ratings = "Update_Ratings";
const Update_Sort_By = "Update_Sort_By";
const Reset_Filters = "Reset_Filters";

export {Update_Price, Update_Category, Update_Ratings, Update_Sort_By, Reset_Filters};

export default ProductFilterReducer;
