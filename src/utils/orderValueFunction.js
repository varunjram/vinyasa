export default function calculateOrderValue(cart) {
  return cart?.reduce(
    (acc, curr) => {
      // curr;
      return {
        price: acc.price + curr.price * curr.qty,
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
