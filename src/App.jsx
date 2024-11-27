/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Cart from "./Cart";
import styles from "./css/App.module.css";

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {}; // 로컬스토리지에 데이터가 없으면 빈 객체로 초기화
  });

  // cartItems 변경 시 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * 
   * @param {*} name 메뉴명
   * @param {*} price 가격
   */
  const addToCart = (name, price) => {
    // 상태 일부를 변경하려면 객체를 복사한 후 수정해야 함
    setCartItems((prevItems) => ({
      ...prevItems, // 전개구문 사용하여 이전객체 보존하고 복사해 놓은것에 추가하는 개념
      [name]: prevItems[name]
        ? { price, count: prevItems[name].count + 1 }
        : { price, count: 1 },
    }));
  };

  /**
   * 
   * @param {*} name 메뉴명 
   * @param {*} countChange 변경된 숫자
   */
  const updateItemCount = (name, countChange) => {
    setCartItems((prevCart) => {
      const updatedCount = (prevCart[name]?.count || 0) + countChange;

      /* prevCart의 특정 아이템(name)의 현재 수량을 확인, 아이템이 없거나 수량이 정의되지 않았으면 0으로 대체
      이 값을 countChange와 더해서 updatedCount에 할당
      ?. 옵셔널체이닝 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?form=MG0AV3
      호출된 함수가 undefined 또는 null인 경우 표현식은 실행을 멈추고 오류를 throw하는데,
      오류를 발생시키는 대신 식이 반환 값으로 마무리 시키므로 DX가 상승! */
      if (updatedCount <= 0) {
        const { [name]: _, ...rest } = prevCart; // prevCart 구조분해 할당
        // prevCart에서 name에 해당하는 키를 제거하고 나머지 키를 rest 객체에 저장해
        return rest;
        // rest를 뱉어줘(특정 아이템에 관련된 데이터는 전처리 함, 나머지는 짬처리 할 뿐 가져다가 쓰지 않음) 
        // updatedCount가 0보다 작다는 소리는 1에서 감소를 한다는 소리이므로 아이템을 제거해줘랑 같은 의미
      }

      // setCartItems()의 반환값
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
      <Cart cartItems={cartItems} setCartItems={setCartItems} updateItemCount={updateItemCount} />
    </div>
  );
};

export default App;
