import MenuItem from "./MenuItem";
import styles from "./css/Menu.module.css";

const menuData = [
  {
    name: "라벤더 카페 브레베",
    price: 7000,
    description: "진한 리저브 에스프레소 샷과 라벤더 향이 어우러진 부드럽고 세련된 풍미.",
    img: "20220412083026158.png",
    // MenuItem에서 import.meta.url 사용할거라, assets까지의 디렉토리 주소는 입력됨, 그 아래의 경로를 적는다.
  },
  {
    name: "스파클링 시트러스 에스프레소",
    price: 7500,
    description: "리저브 에스프레소에 상큼한 레몬과 진저에일을 더한 청량감 넘치는 커피.",
    img: "20210322093318028.jpg",
  },
  {
    name: "라즈베리 쇼콜라",
    price: 5900,
    description: "초콜릿 케이크 사이에 라즈베리를 올린 진하고 묵직한 초콜릿 케이크.",
    img: "20210325161742703.jpg",
  },
];

// eslint-disable-next-line react/prop-types
const Menu = ({ addToCart }) => {
  return (
    <div className={styles.menu}>
      {menuData.map((item) => (
        <MenuItem key={item.name} {...item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;
