import React from 'react'
import SwiperCustomSlide from './SwiperCustomSlide/SwiperCustomSlide';
import './SpecialGuestSlider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { guests } from './guest.json'
import { Pagination, Navigation, Autoplay } from "swiper";


export default function SpecialGuestSlider() {
  let delayNum = 2000;

  return (
    <div className='special-guest-slider'>
      <Swiper
            pagination={{
                  dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            autoplay={{
              delay: delayNum,
              disableOnInteraction:true,
              
            }}

            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
      
      >
            {guests.map(guest => {
              return <SwiperSlide key={guest.id}><SwiperCustomSlide photo={guest.photo} name={guest.name} info={guest.info}></SwiperCustomSlide></SwiperSlide>
            })}            
      </Swiper>
    </div>
  )
}
