const fetchProducts = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  console.log(data);
};

export {fetchProducts};
