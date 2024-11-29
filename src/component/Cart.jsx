/* eslint-disable react/prop-types */
import { useEffect } from "react";
import CartItem from "./CartItem";
import styles from "../css/Cart.module.css";


const Cart = ({ cartItems, setCartItems, updateItemCount }) => {
  const totalAmount = Object
    .values(cartItems)
    // 객체의 값들을 배열로 반환
    .reduce((total, item) => total + item.price * item.count, 0);
  // 배열의 각 요소에 대해 주어진 함수를 실행하여 하나의 값을 반환

  // 로컬스토리지 초기화
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, [setCartItems]);

  // 장바구니 상태 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className={styles.cart}>
      <h2>Cart</h2>
      <div>
        {Object.keys(cartItems).length === 0 ? (
          <p>카트가 비었어요😹</p>
        ) : (
          Object.entries(cartItems).map(([name, item]) => (
            <CartItem
              key={name}
              name={name}
              price={item.price}
              count={item.count}
              updateItemCount={updateItemCount}
            />
          ))
        )}
      </div>
      <h3 className={styles.total}>
        Total: {totalAmount.toLocaleString()}원
      </h3>
    </section>
  );
};

export default Cart;
