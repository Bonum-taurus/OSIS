import { Accordion } from '../../components/Accordion';
import { VendorCard } from '../../components/VendorCard';
import { generateAmountCards } from '../../services/generateCards';
import './Directions.scss';

import { Parallax } from 'react-scroll-parallax';
import { WaveParallax } from '../../components/WaveParallax';
import wave from '../../images/parallax/directions-wave-parallax.png';

export const Directions = () => {

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
          translateY={['-100%', '60%']}
        >
          <WaveParallax wave={wave} />
        </Parallax>
      </div>

      <div className="directions__parallax-box-right">
        <Parallax 
          className="directions__parallax-right"
          translateY={['-20%', '160%', 'easeInOutSine']}
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