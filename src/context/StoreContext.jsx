import { createContext, useEffect, useReducer, useContext } from "react";
import StoreReducer, {
  CATEGORIES_LOADING,
  PRODUCTS_LOADING,
  SET_CATEGORIES_ERROR,
  SET_PRODUCTS_ERROR,
  UPDATE_CATEGORIES,
  UPDATE_PRODUCTS,
  store,
} from "../reducers/storeReducer";
import ProductFilterReducer, { Update_Category } from "../reducers/productFilterReducer";
import { fetchCategories, fetchProducts } from "../utils/apiCalls";

export const StoreContext = createContext();

const initialProductFilters = {
  price: 200,
  category: [],
  ratings: { id: 2, name: "2star & above", value: 2 },
  sortBy: { id: 2, name: "Hing to Low", value: "Hing to Low" },
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, store);
  const [filter, dispatchFilter] = useReducer(ProductFilterReducer, initialProductFilters);

  // Actions Creeators

  const updateProducts = (payload) => dispatch({ type: UPDATE_PRODUCTS, payload });
  const setProductsLoading = (payload) => dispatch({ type: PRODUCTS_LOADING, payload });
  const setProductsError = (payload) => dispatch({ type: SET_PRODUCTS_ERROR, payload });

  const updateCategories = (payload) => dispatch({ type: UPDATE_CATEGORIES, payload });
  const setCategoriesLoading = (payload) => dispatch({ type: CATEGORIES_LOADING, payload });
  const setCategoriesError = (payload) => dispatch({ type: SET_CATEGORIES_ERROR, payload });

  useEffect(() => {
    fetchProducts({ setProductsLoading, setProductsError, updateProducts });
    fetchCategories({ updateCategories, setCategoriesLoading, setCategoriesError });
  }, []);

  useEffect(() => {
    dispatchFilter({ type: Update_Category, payload: [state.categories[2]] });
  }, [state?.categories]);
  return (
    <StoreContext.Provider value={{ ...state, filter, dispatch, dispatchFilter }}>
      {children}
    </StoreContext.Provider>
  );
};

// Custom Hook
export const useStore = () => useContext(StoreContext);

export default StoreContextProvider;
