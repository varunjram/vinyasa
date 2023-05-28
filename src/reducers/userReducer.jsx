const userReducer = (state, {type, payload}) => {
  switch (type) {
    case "Add_user":
      return {...state, ...payload};
    case "Logout":
      return {...state, isLoggedIn: false};
    case "Update_cart":
      // console.log('state-cart: ', state);
      console.log('state-cart: ', {...state, cart: payload});
      return {...state, cart: payload};
    case "Update_wishlist":
      console.log('state-before: ', state);
      console.log('state-after: ', {...state, wishlist: payload});
      return {...state, wishlist: payload};
    default:
      throw new Error("Not a Reducer Function");
  }
};

const Add_user = "Add_user";
const Logout = "Logout";
const Update_cart = "Update_cart"
const Update_wishlist = "Update_wishlist"
export {Add_user, Logout,Update_cart,  Update_wishlist};

export default userReducer;
