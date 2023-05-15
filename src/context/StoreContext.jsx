import {createContext, useEffect, useReducer} from "react";
import StoreReducer from "../reducers/storeReducer";
import {fetchProducts} from "../utils/apiCalls";

export const StoreContext = createContext();

const store = {
  categories: [],
  products: [],
  test: 1452,
};

const StoreContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(StoreReducer, store);

  useEffect(() => {
    fetchProducts();
  }, []);
  return <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
