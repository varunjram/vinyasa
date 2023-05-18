import React from "react";

function ProductCard(Product) {
  const {title, price} = Product;
  return (
    <article className="product-card">
      <div className="product-card__img-containder">
        <img
          src="https://cdn.shopify.com/s/files/1/0675/4949/products/mens-mock-neck-pullover-winter-clothing-vector-828_600x.png?v=1660822729"
          alt=""
          srcset=""
        />
      </div>

      <div className="product-card__data">
        <h3>{title}</h3>
        <p>{price}</p>
        <button aria-label="Add to Cart" class="p-button p-component">
          <span class="p-button-label p-c">Add to Cart</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
