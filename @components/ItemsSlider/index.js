import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@material-ui/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    minHeight: 280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    width: "100%",
  },
}));

export default function ItemsSlider({
  showPagination = false,
  spaceBetween = 30,
  slidesPerView = 5,
  showNavigation = false,
}) {
  const classes = useStyles();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className={classes.root}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={showPagination && pagination}
        className="mySwiper"
        navigation={showNavigation}
      >
        <SwiperSlide>
          <div className={classes.item}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.item}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.item}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.item}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.item}>Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.item}>Slide 6</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
