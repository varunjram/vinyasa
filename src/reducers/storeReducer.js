const StoreReducer = (state, {type, payload}) => {
  switch (type) {
    case "Update_Products":
      return {...state, products: payload};
    case "Update_Test":
      return {...state, test: state.test + 1};
    default:
      throw new Error("Not a Reducer Function");
  }
};
const Update_Test = "Update_Test";
const Update_Products = "Update_Products";
export {Update_Test, Update_Products};
export default StoreReducer;