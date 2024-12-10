/* eslint-disable react/prop-types */
// 외부 menuData
import menuData from "../data/menuData";

// antd lib
import { Badge } from 'antd';

// swiper lib 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css"; // Swiper 기본 스타일
import "swiper/css/pagination"; // 페이지네이션 스타일

import { useState } from "react";
import MenuItem from "./MenuItem";
import styles from "../css/Menu.module.css";

const Menu = ({ addToCart }) => {
  // 카테고리별 데이터 길이 계산로직
  const allCount = menuData.length; // 메뉴 총갯수
  const categoryCounts = menuData.reduce((acc, item) => {
    // reduce는 배열의 모든 요소를 순회하며 누적 값을 계산하고, 최종 결과를 반환함, 즉 메뉴별 갯수 반환
    // 배열.reduce((누적값, 현재값)=>{누적계산 후 최종 누적값 반환}, 초기값)
    acc[item.category] = (acc[item.category] || 0) + 1;
    // 현재 누적 객체에서 item.category 키에 해당하는 값을 가져오거나 없으면 0, 이 값에 1씩 누적 
    return acc; // 최종누적값 
  }, {});

  const [filter, setFilter] = useState("all"); // 전체메뉴 출력으로 초기 상태값 반영
  const filteredMenu = filter === "all" ? menuData : menuData.filter((item) => item.category === filter);

  return (
    <div className={styles.menu}>
      {/* 메뉴 카테고리 버튼 */}
      <div className={styles.buttons}>
        {/* 전체 버튼 */}
        <Badge key="all" count={allCount} color="#533566">
          <button
            key={allCount}
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? styles.active : ""}`}
          >
            all
          </button>
        </Badge>

        {/* 카테고리 별 버튼 */}
        {Object.keys(categoryCounts).map((category) => (
          <Badge key={category} count={categoryCounts[category]} color="#533566">
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`${filter === category ? styles.active : ""}`}
            >
              {category}
            </button>
          </Badge>
        ))}
      </div>

      {/* 메뉴 캐러셀 구성 - swiper */}
      <Swiper
        spaceBetween={8}
        slidesPerView={3}
        pagination={true} modules={[Pagination]}
        className={styles.menuSwiper}
      >
        {/* 필터링 된 메뉴별로 슬라이드 구성 */}
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
