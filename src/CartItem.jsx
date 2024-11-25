/* eslint-disable react/prop-types */
import styles from "./css/CartItem.module.css";

const CartItem = ({ name, price, count }) => {
  return (
    <div className={styles.cartItem}>
      <span>
        {name} x{count}
      </span>
      <span>{(price * count).toLocaleString()}원</span>
    </div>
  );
};

export default CartItem;
