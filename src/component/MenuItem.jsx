/* eslint-disable react/prop-types */
import styles from "../css/MenuItem.module.css";

const MenuItem = ({ name, engName, price, description, img, addToCart }) => {
  const imageSrc = new URL(`../assets/${img}`, import.meta.url).href;
  // 이미지를 띄우기 위해 import.meta.url 사용하기
  return (
    <div className={styles.menuItem} onClick={() => addToCart(name, price)}>
      <img src={imageSrc} alt={name} className={styles.image} />
      <div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.engName}>{engName}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price.toLocaleString()}원</p>
    </div>
  );
};

export default MenuItem;
