import axios from "axios";

const fetchProducts = async ({ setProductsLoading, setProductsError, updateProducts }) => {
  setProductsLoading(true);
  try {
    const response = await axios("/api/products");

    if (response?.statusText === "OK") {
      updateProducts(response?.data?.products);
    }
  } catch (error) {
    setProductsError(error);
  } finally {
    setProductsLoading(false);
  }
};
const fetchCategories = async ({ updateCategories, setCategoriesLoading, setCategoriesError }) => {
  setCategoriesLoading(true);
  try {
    const response = await axios("/api/categories");
    if (response?.statusText === "OK") {
      updateCategories(response?.data?.categories);
    }
  } catch (error) {
    setCategoriesError(error);
  } finally {
    setCategoriesLoading(false);
  }

  const response = await fetch("/api/categories");
  const data = await response.json();

  return data.categories;
};
const addProductsToWishlist = async (product, toast, updateWishlist) => {
  const token = localStorage.getItem("userToken");
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 201) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Product added to Wishlist",
        life: 1000,
      });
      updateWishlist(response?.data?.wishlist);
    }
  } catch (error) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not add product to Wishlist",
      life: 1000,
    });
  }
};
const removeProductsFromWishlist = async (id, toast, updateWishlist) => {
  const token = localStorage.getItem("userToken");

  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });

    if (response.status === 200) {
      toast.current.show({
        severity: "info",
        summary: "Success",
        detail: "Product removed from Wishlist",
        life: 1000,
      });
      updateWishlist(response?.data?.wishlist);
    }
  } catch (error) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not remove product from Wishlist",
      life: 1000,
    });
  }
};
const addProductsToCart = async (product, toast, updateCart) => {
  const token = localStorage.getItem("userToken");
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (response.status === 201) {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Product added to cart",
        life: 1000,
      });
      updateCart(response?.data?.cart);
    }
  } catch (error) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not add product to Cart",
      life: 1000,
    });
  }
};

const removeCartProduct = async (id, toast = null, updateCart) => {
  const token = localStorage.getItem("userToken");
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      updateCart(response?.data?.cart);
      toast?.current?.show({
        severity: "info",
        summary: "Info.",
        detail: "Item removed from the Cart",
        life: 1000,
      });
    }
  } catch (error) {}
};

const updateProductQuantity = async (id, type, toast, updateCart) => {
  const token = localStorage.getItem("userToken");
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      updateCart(response?.data?.cart);
    }
  } catch (error) {}
};

export {
  fetchProducts,
  fetchCategories,
  addProductsToCart,
  removeCartProduct,
  updateProductQuantity,
  addProductsToWishlist,
  removeProductsFromWishlist,
};
