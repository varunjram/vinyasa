import { v4 as uuid } from "uuid";

const initialUserState = {
  user: {},
  isLoggedIn: false,
  cart: [],
  wishlist: [],
  addressBook: [
    {
      id: uuid(),
      title: "HOME",
      name: "John",
      lastName: "Doe",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      fullAddress: "#123 Main Street",
      isDefault: true,
    },
  ],
  randomAddressBook: [
    {
      id: uuid(),
      title: "Mr.",
      name: "John",
      lastName: "Doe",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      fullAddress: "#123 Main Street",
    },
    {
      id: uuid(),
      title: "Home-199a1",
      name: "Jane",
      lastName: "Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
      country: "United Kingdom",
      state: "London",
      city: "London",
      fullAddress: "#456 Elm Avenue",
    },
    {
      id: uuid(),
      title: "Home-200b2",
      name: "Michael",
      lastName: "Johnson",
      phone: "555-123-4567",
      email: "michaeljohnson@example.com",
      country: "Canada",
      state: "Ontario",
      city: "Toronto",
      fullAddress: "#789 Oak Street",
    },
    // Add 9 more address entries...
    {
      id: uuid(),
      title: "Home-201c3",
      name: "Emily",
      lastName: "Davis",
      phone: "111-222-3333",
      email: "emilydavis@example.com",
      country: "Australia",
      state: "New South Wales",
      city: "Sydney",
      fullAddress: "#987 Pine Avenue",
    },
    {
      id: uuid(),
      title: "Home-202d4",
      name: "Alexander",
      lastName: "Wilson",
      phone: "444-555-6666",
      email: "alexanderwilson@example.com",
      country: "Germany",
      state: "Bavaria",
      city: "Munich",
      fullAddress: "#654 Oak Street",
    },
    {
      id: uuid(),
      title: "Home-203e5",
      name: "Sophia",
      lastName: "Lee",
      phone: "777-888-9999",
      email: "sophialee@example.com",
      country: "France",
      state: "Paris",
      city: "Paris",
      fullAddress: "#321 Elm Avenue",
    },
  ],
};

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGOUT":
      return { ...state, isLoggedIn: false, cart: [], wishlist: [] };
    case "LOGIN":
      return { ...state, ...payload };
    case "UPDATE_DEFAULT_ADDRESS":
      const selectedAddress = state?.addressBook?.map((_add) =>
        payload === _add.id ? { ..._add, isDefault: true } : { ..._add, isDefault: false }
      );
      return { ...state, addressBook: selectedAddress };
    case "ADD_ADDRESS":
      return { ...state, addressBook: [...state.addressBook, payload] };
    case "DELETE_ADDRESS":
      return { ...state, addressBook: [...state.addressBook.filter((_a) => _a.id !== payload)] };
    case "Update_cart":
      console.log("state-cart: ", { ...state, cart: payload });
      return { ...state, cart: payload };
    case "Update_wishlist":
      console.log("state-after: ", { ...state, wishlist: payload });
      return { ...state, wishlist: payload };
    default:
      throw new Error("Not a Reducer Function");
  }
};

const LOGOUT = "LOGOUT";
const LOGIN = "LOGIN";
const UPDATE_DEFAULT_ADDRESS = "UPDATE_DEFAULT_ADDRESS";
const ADD_ADDRESS = "ADD_ADDRESS";
const DELETE_ADDRESS = "DELETE_ADDRESS";
const Update_cart = "Update_cart";
const Update_wishlist = "Update_wishlist";
export {
  initialUserState,
  LOGOUT,
  LOGIN,
  UPDATE_DEFAULT_ADDRESS,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  Update_cart,
  Update_wishlist,
};

export default userReducer;
