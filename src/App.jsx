import { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import styles from "./css/App.module.css";

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (name, price) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [name]: prevItems[name]
        ? { price, count: prevItems[name].count + 1 }
        : { price, count: 1 },
    }));
  };

  return (
    <div className={styles.app}>
      <h1>🕋✨루나의 별다방✨🕋</h1>
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
