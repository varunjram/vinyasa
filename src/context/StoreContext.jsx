import {createContext, useEffect, useReducer} from "react";
import StoreReducer, {Update_Products} from "../reducers/storeReducer";
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
    (async () => {
      dispatch({type: Update_Products, payload: await fetchProducts()});
    })();
  }, []);
  return <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
