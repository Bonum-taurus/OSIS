import './Slider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/pagination";
import { LogoCard } from '../LogoCard';

import { generateAmountCards } from '../../services/generateCards';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Slider = () => {
  const deskTop4k = useMediaQuery('(min-width:2000px)')
  const lapTop = useMediaQuery('(max-width:1024px)')
  const pre_mobile = useMediaQuery('(max-width:625px)')

  return (
    <Swiper
      className="main__swiper-slider"
      modules={[Grid, Pagination]}
      spaceBetween={deskTop4k ? 20 : 16}
      slidesPerView={deskTop4k ? 5 : pre_mobile ? 2 : lapTop ? 3 : 4}
      slidesPerGroup={deskTop4k ? 4 : pre_mobile ? 2 : lapTop ? 3 : 4}
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