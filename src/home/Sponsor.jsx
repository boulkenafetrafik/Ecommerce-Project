import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "../styles/category.css"

// import required modules
import { Autoplay , Pagination } from 'swiper/modules';



const sponsorList = [
    {
    imgUrl: "/src/assets/images/sponsor/01.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/02.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/03.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/04.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/05.png",
    },
    {
    imgUrl: "/src/assets/images/sponsor/06.png",
    },
    {
        imgUrl: "/src/assets/images/sponsor/05.png",
        },
        {
        imgUrl: "/src/assets/images/sponsor/06.png",
        },
];


const Sponsor = () => {
  return (
    <div className='sponsor-section section-bg'>
        <div className='container'>
            <div className='section-wrapper'>
                <div className='sponsor-slider'>
                <Swiper
        slidesPerView={1}
        spaceBetween={80}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >

        {
        sponsorList.map((val, index) => (
                <SwiperSlide key={index}>

<div className='sponsor-item'>
    <div className='sponsor-thumb'>
    <img src={val.imgUrl} alt="" />
    </div>

</div>
                </SwiperSlide>
              ))
              }
      </Swiper>

                </div>

            </div>

        </div>


    </div>
  )
}

export default Sponsor