import React from 'react'
import { SwiperSlide } from 'swiper/react'
import './SwiperCustomSlide.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function SwiperCustomSlide({photo, name, info}) {
  return (
            <div className='guest'>
                  <img src={photo} alt={name} className="guest__image" />
                  <h3 className="guest__name">{name}</h3>
                  <p className="guest__info">{info}</p>
            </div>
      )
}
