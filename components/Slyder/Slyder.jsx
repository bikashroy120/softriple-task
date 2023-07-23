"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import ReactImageMagnify from 'react-image-magnify';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ImageZoomer from './ImageZoomer';

export default function Slyder({image}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >

        {
          image.map((item,i)=>(
            <SwiperSlide key={i} style={{width:"100%",height:"100%"}}>
                <ImageZoomer img={item}/>
          </SwiperSlide>
          ))
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >

        {
          image.map((item,i)=>(
            <SwiperSlide key={i}>
            <img src={item} />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
