import './Slider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/pagination";
import { LogoCard } from '../LogoCard';

import { generateAmountCards } from '../../services/generateCards';

export const Slider = () => {
  return (
    <Swiper
      className="main__swiper-slider"
      modules={[Grid, Pagination]}
      spaceBetween={16}
      slidesPerView={4}
      slidesPerGroup={4}
      speed={2000}
      pagination={
        { clickable: true }
      }
      grid={
        {
          rows: 2,
          fill: "row",
        }
      }
    >
      {generateAmountCards(31).map(number => (
        <SwiperSlide key={number}>
          <LogoCard number={number} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}