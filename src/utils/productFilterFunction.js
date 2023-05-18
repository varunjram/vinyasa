const filterBY = ({products, price, category, sortBy, ratings}) => {
  console.log("category: ", category);
  const priceFilter = products.filter((product) => product.price >= price);
  console.log("priceFilter: ", priceFilter);
  const categoryFilter = priceFilter.filter(
    (product) =>
      !category || category.map((cat) => cat?.categoryName).includes(product?.categoryName)
  );
  console.log("categoryFilter: ", categoryFilter);
  const ratingFilter = categoryFilter.filter((product) => product.rating >= ratings.value);
  console.log("ratingFilter: ", ratingFilter);
  const sortByPrice =
    sortBy.value === "Low to High"
      ? ratingFilter.sort((a, b) => a.price - b.price)
      : ratingFilter.sort((a, b) => b.price - a.price);
  console.log("sortByPriceFilter:: ", sortByPrice);

  return sortByPrice;
};

export default filterBY;
