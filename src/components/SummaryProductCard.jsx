const SummaryProductCard = ({ product }) => {
  const { name, brand, price, image_url, qty } = product || {};
  return (
    <div className="flex summary-product-card">
      <div className="spc-image-container w-4rem h-4rem">
        <img
          style={{ objectFit: "cover" }}
          className="w-full h-full cover"
          src={image_url}
          alt={name}
        />
      </div>
      <div className="spc-name-section flex-grow-1 flex justify-content-center flex-column">
        <p>
          <strong>{name}</strong>
        </p>
        <p>{brand}</p>
      </div>
      <div className="price-quantity  flex justify-content-center flex-column">
        <p>
          <strong>&#8377;{price}</strong>
        </p>
        <p>Qty:{qty}</p>
      </div>
    </div>
  );
};

export default SummaryProductCard;
