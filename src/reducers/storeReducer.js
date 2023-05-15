const StoreReducer = (state, {type, payload}) => {
  switch (type) {
    case "type 1":
      return "something 1";
    case "Update_Test":
      return {...state, test: state.test + 1};
    default:
      throw new Error("Not a Reducer Function");
  }
};
const Update_Test = "Update_Test";
export {Update_Test};
export default StoreReducer;
