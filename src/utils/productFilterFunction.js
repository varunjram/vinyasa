const filterBY = ({ products, price, category, sortBy, ratings }) => {
  console.log("price: ", price);
  if (!price && !category.length && !sortBy.value && !ratings.value) return products;
  const priceFilter = products.filter((product) => product.price >= price);

  const categoryFilter = priceFilter.filter(
    (product) =>
      !category.length || category.map((cat) => cat?.categoryName).includes(product?.categoryName)
  );

  const ratingFilter = categoryFilter.filter(
    (product) => !ratings.value || product.rating >= ratings.value
  );

  const sortByPrice =
    sortBy.value === "Low to High"
      ? ratingFilter.sort((a, b) => a.price - b.price)
      : ratingFilter.sort((a, b) => b.price - a.price);

  return sortByPrice;
};

export default filterBY;
