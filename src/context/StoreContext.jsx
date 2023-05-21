import {createContext, useEffect, useReducer} from "react";
import StoreReducer, {Update_Categories, Update_Products} from "../reducers/storeReducer";
import ProductFilterReducer, {Update_Category} from "../reducers/productFilterReducer";
import {fetchCategories, fetchProducts} from "../utils/apiCalls";

export const StoreContext = createContext();

const store = {
  categories: [],
  products: [],
  test: 1452,
};

const initialProductFilters = {
  price: 200,
  category: [],
  ratings: {id: 2, name: "2star & above", value: 2},
  sortBy: {id: 2, name: "Hing to Low", value: "Hing to Low"},
};

const StoreContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(StoreReducer, store);
  console.log("state: ", state);
  const [filter, dispatchFilter] = useReducer(ProductFilterReducer, initialProductFilters);
  console.log("filter: ", filter);

  useEffect(() => {
    (async () => {
      dispatch({type: Update_Products, payload: await fetchProducts()});
      dispatch({type: Update_Categories, payload: await fetchCategories()});
      console.log("ASD");
    })();
  }, []);
  useEffect(() => {
    dispatchFilter({type: Update_Category, payload: [state.categories[2]]});
  }, [state.categories]);
  return (
    <StoreContext.Provider value={{...state, filter, dispatch, dispatchFilter}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
