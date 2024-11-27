/* eslint-disable no-unused-vars */
import { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import styles from "./css/App.module.css";

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (name, price) => {
    // 상태 일부를 변경하려면 객체를 복사한 후 수정
    setCartItems((prevItems) => ({
      ...prevItems, // 전개구문 사용하여 이전객체 보존하고 추가하는 개념
      [name]: prevItems[name]
        ? { price, count: prevItems[name].count + 1 }
        : { price, count: 1 },
    }));
  };

  const updateItemCount = (name, countChange) => {
    setCartItems((prevCart) => {
      const updatedCount = (prevCart[name]?.count || 0) + countChange;
      if (updatedCount <= 0) {
        const { [name]: _, ...rest } = prevCart; // 아이템 제거
        return rest;
      }
      return {
        ...prevCart,
        [name]: { ...prevCart[name], count: updatedCount },
      };
    });
  };



  return (
    <div className={styles.app}>
      <h1>🕋✨루나의 별다방✨🕋</h1>
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} updateItemCount={updateItemCount} />
    </div>
  );
};

export default App;
