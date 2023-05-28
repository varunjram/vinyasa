import axios from "axios";

const fetchProducts = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  console.log("products", data);
  return data.products;
};
const fetchCategories = async () => {
  const response = await fetch("/api/categories");
  const data = await response.json();
  console.log("categories", data);
  return data.categories;
};
const addProductsToWishlist = async (product, toast,updateWishlist) => {
  console.log("product: ", product);
  const token = localStorage.getItem("userToken");
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      {product},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response: ", response);
    if (response.status === 201) {
      console.log("response: ", response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Product added to Wishlist",
         life: 2000,
      });
      updateWishlist(response?.data?.wishlist)
    }
  } catch (error) {
    console.log("error: ", error);
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not add product to Wishlist",
       life: 2000,
    });
  }
};
const removeProductsFromWishlist = async (id,toast,updateWishlist) => {
  const token = localStorage.getItem("userToken");
  console.log('token: ', token);
  try {
    const response = await axios.delete(
    `/api/user/wishlist/${id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response-remove: ", response);
    if (response.status === 200) {
      console.log("response: ", response);
      toast.current.show({
        severity: "info",
        summary: "Success",
        detail: "Product removed to Wishlist",
         life: 2000, 
      });
      updateWishlist(response?.data?.wishlist)
    
    }
  } catch (error) {
    console.log("error: ", error);
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not remove product to Wishlist",
       life: 2000,
    });
  }
};
const addProductsToCart = async (product, toast ,updateCart) => {
  console.log("product: ", product);
  const token = localStorage.getItem("userToken");
  try {
    const response = await axios.post(
      "/api/user/cart",
      {product},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("response: ", response);
    if (response.status === 201) {
      console.log("response: ", response);
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Product added to cart",
         life: 2000,
      });
      updateCart(response?.data?.cart)
    }
  } catch (error) {
    console.log("error: ", error);
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not add product to Cart",
       life: 2000,
    });
  }
};



export {fetchProducts, fetchCategories, addProductsToCart, addProductsToWishlist, removeProductsFromWishlist};
