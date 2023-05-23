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
const addProductsToWishlist = async (product, toast) => {
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
        detail: "Product added to cart",
        life: 3000,
      });
    }
  } catch (error) {
    console.log("error: ", error);
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not add product",
      life: 3000,
    });
  }
};
const addProductsToCart = async (product, toast) => {
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
        life: 3000,
      });
    }
  } catch (error) {
    console.log("error: ", error);
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Could not add product",
      life: 3000,
    });
  }
};

export {fetchProducts, fetchCategories, addProductsToCart, addProductsToWishlist};
