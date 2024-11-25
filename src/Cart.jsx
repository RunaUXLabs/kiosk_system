/* eslint-disable react/prop-types */
import CartItem from "./CartItem";
import styles from "./css/Cart.module.css";

const Cart = ({ cartItems }) => {
  const totalAmount = Object
    .values(cartItems)
    .reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <div>
        {Object.keys(cartItems).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          Object.entries(cartItems).map(([name, item]) => (
            <CartItem key={name} name={name} price={item.price} count={item.count} />
          ))
        )}
      </div>
      <div className={styles.total}>
        Total: {totalAmount.toLocaleString()}원
      </div>
    </div>
  );
};

export default Cart;
