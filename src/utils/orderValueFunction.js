export default function calculateOrderValue(cart) {
  return cart?.reduce(
    (acc, curr, i) => {
      return {
        price: acc.price + curr.strikePrice * curr.qty,
        discount: acc.discount + (curr.strikePrice - curr.price) * curr.qty,
        quantity: acc.quantity + curr.qty,
      };
    },
    {
      price: 0,
      discount: 0,
      quantity: 0,
    }
  );
}
