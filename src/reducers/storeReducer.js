const store = {
  categories: [],
  products: [],
  isProductsLoading: false,
  isCategoriesLoading: false,
  setProductsError: {},
  setCategoriesError: {},
};

const StoreReducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_PRODUCTS":
      return { ...state, products: payload };
    case "UPDATE_CATEGORIES":
      return { ...state, categories: [...payload] };
    case "PRODUCTS_LOADING":
      return { ...state, isProductsLoading: payload };
    case "CATEGORIES_LOADING":
      return { ...state, isCategoriesLoading: payload };
    case "SET_PRODUCTS_ERROR":
      return { ...state, setProductsError: payload };
    case "SET_CATEGORIES_ERROR":
      return { ...state, setCategoriesError: payload };
    default:
      throw new Error("Not a Reducer Function");
  }
};
// Action Types
const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
const PRODUCTS_LOADING = "PRODUCTS_LOADING";
const CATEGORIES_LOADING = "CATEGORIES_LOADING";
const SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR";
const SET_CATEGORIES_ERROR = "SET_CATEGORIES_ERROR";
const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

export {
  store,
  UPDATE_PRODUCTS,
  PRODUCTS_LOADING,
  CATEGORIES_LOADING,
  SET_PRODUCTS_ERROR,
  SET_CATEGORIES_ERROR,
  UPDATE_CATEGORIES,
};
export default StoreReducer;
