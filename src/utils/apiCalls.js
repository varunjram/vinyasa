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

export {fetchProducts, fetchCategories};
