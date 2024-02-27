import { Accordion } from '../../components/Accordion';
import { VendorCard } from '../../components/VendorCard';
import { generateAmountCards } from '../../services/generateCards';
import './Directions.scss';

import { Parallax } from 'react-scroll-parallax';
import { WaveParallax } from '../../components/WaveParallax';
import wave from '../../images/parallax/directions-wave-parallax.png';

import useMediaQuery from '@mui/material/useMediaQuery';

export const Directions = () => {
  const deskTop4k = useMediaQuery('(min-width:2000px)');
  const lapTop = useMediaQuery('(max-width:1024px)');
  const pre_tablet = useMediaQuery('(max-width:900px)');
  const tablet = useMediaQuery('(max-width:744px)');
  const pre_mobile = useMediaQuery('(max-width:625px)');
  const mobile = useMediaQuery('(max-width:500px)');

  return (
    <section className="directions">
      <h2 className="directions__title">
        Напрямки
      </h2>

      <article className="directions__accordion">
        <Accordion/>
      </article>

      <div className="directions__parallax-box-left">
        <Parallax 
          className="directions__parallax-left"
          translateY={pre_mobile ? ['-90%', '40%'] : ['-100%', '60%']}
          translateX={deskTop4k ? ['23%', '23%'] : mobile ? ['-43%', '-43%'] : lapTop ? tablet ? ['-30%', '-30%'] : ['-22%', '-22%'] : ['-5%', '-5%']}
          scale={pre_mobile ? [1, 1] : pre_tablet ? tablet ? [0.6, 0.6] : [0.8, 0.8] : [1, 1]}
          scaleY={pre_mobile ? [0.7, 0.7] : [1, 1]}
        >
          <WaveParallax wave={wave} />
        </Parallax>
      </div>

      <div className="directions__parallax-box-right">
        <Parallax 
          className="directions__parallax-right"
          translateY={['-20%', '160%', 'easeInOutSine']}
          translateX={deskTop4k ? ['0%', '0%'] : mobile ? ['53%', '53%'] : pre_mobile ? ['43%', '43%'] : lapTop ? tablet ? ['35%', '35%'] : ['30%', '30%'] : ['15%', '15%']}
          scale={pre_tablet ? [0.8, 0.8] : [1, 1]}
        >
          <WaveParallax wave={wave} />
        </Parallax>
      </div>

      <h2 className="directions__title directions__title--vendors">
        Вендори
      </h2>

      <p className="directions__vendors-text">
        Ми пишаємося нашими міцними партнерськими відносинами з провідними постачальниками IT обладнання. Наші партнери – це ключові гравці в галузі, котрі забезпечують нам доступ до передових технологій та інноваційних рішень.
      </p>

      <div className="directions__vendors-logos">
        {generateAmountCards(12).map(number => (
          <VendorCard key={number} number={number} />
        ))}
      </div>
    </section>
  )
}