const userReducer = (state, {type, payload}) => {
  switch (type) {
    case "Add_user":
      return {...state, ...payload};
    case "Logout":
      return {...state, isLoggedIn: false};
    default:
      throw new Error("Not a Reducer Function");
  }
};

const Add_user = "Add_user";
const Logout = "Logout";

export {Add_user, Logout};

export default userReducer;
