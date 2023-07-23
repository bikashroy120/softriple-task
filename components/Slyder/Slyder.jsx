"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactImageMagnify from 'react-image-magnify';
import ReactImageZoom from 'react-image-zoom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

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
               
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: item,
                        // sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                    },
                    largeImage: {
                        src: item,
                        width: 550,
                        height: 600,
                    },
                    enlargedImagePosition:'over',
                    imageClassName:"hhhhh",
                    enlargedImageContainerClassName:"heeeee",
                    enlargedImageContainerStyle: {
                      zIndex: "1000",
                    },
                    enlargedImageContainerDimensions: {
                      width: "100%",
                      height: "100%",
                    },
                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                }} />
               
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
