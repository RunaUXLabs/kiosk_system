/* eslint-disable react/prop-types */
import styles from "../css/CartItem.module.css";

const CartItem = ({ name, price, count, updateItemCount }) => {

  return (
    <div className={styles.cartItem}>
      {/* 수량 증가 버튼 */}
      <button
        className={styles.changeButton}
        onClick={() => updateItemCount(name, 1)}
      >
        +
      </button>

      {/* 이름 및 수량 표시 */}
      <span className={styles.itemDetails}>
        {name} x {count}
      </span>

      {/* 수량 감소 버튼 */}
      <button
        className={styles.changeButton}
        onClick={() => updateItemCount(name, -1)}
        disabled={count <= 1} // 수량이 1일 때 비활성화
      >
        -
      </button>

      {/* 아이템 총 가격 표시 */}
      <span className={styles.itemPrice}>
        {(price * count).toLocaleString()}원
      </span>

      {/* 삭제 버튼 */}
      <button
        className={styles.removeButton}
        onClick={() => updateItemCount(name, -count)}
      >
        삭제
      </button>
    </div>
  );
};

export default CartItem;
