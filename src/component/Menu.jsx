/* eslint-disable react/prop-types */
// 외부 menuData
import menuData from "../data/menuData";

// swiper lib 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css"; // Swiper 기본 스타일
import "swiper/css/pagination"; // 페이지네이션 스타일

import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "../css/Menu.module.css";

const Menu = ({ addToCart }) => {
  const categorys = ["all", "coffee", "food"];
  const [filter, setFilter] = useState("all"); // 전체메뉴 출력으로 상태값 반영
  const filteredMenu = filter === "all" ? menuData : menuData.filter((item) => item.category === filter);

  return (
    <div className={styles.menu}>
      {/* 메뉴 카테고리 버튼 */}
      <div className={styles.buttons}>
        {categorys.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`${filter === category ? styles.active : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 메뉴 캐러셀 구성 - swiper */}
      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        pagination={true} modules={[Pagination]}
        className={styles.menuSwiper}
      >
        {filteredMenu.map((item) => (
          <SwiperSlide key={item.name}>
            <MenuItem {...item} addToCart={addToCart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Menu;
