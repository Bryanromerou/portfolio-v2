import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation,Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation,Pagination])

// Import Swiper styles

const Carousel = ({images}) => {
  const image_props = images.map((image,key)=>{
    return(<SwiperSlide key={key} ><img src={image} className="project-image" alt=""/></SwiperSlide>)
  })
  return (
    <Swiper
      className="project-image"
      navigation
      pagination
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {image_props}
    </Swiper>
  );
}

export default Carousel;
