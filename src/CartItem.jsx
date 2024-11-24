import styles from "./css/CartItem.module.css";
// eslint-disable-next-line react/prop-types
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
