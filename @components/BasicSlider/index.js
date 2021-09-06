import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@material-ui/core";

// Import Swiper styles
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay]);

const useStyles = makeStyles((theme) => ({}));

export default function BasicSlider() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://static.fzinternal.com/dealers/569ee215cca97.jpg"
            alt=""
            style={{ height: 450 }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdnmedia.endeavorsuite.com/images/organizations/5bfa1085-68e2-46cf-8f35-20608af1c6e9/Honda%20Parts%20Direct_Banner1.jpg?v=1543267885084?v=20190430182857"
            alt=""
            style={{ height: 450 }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
