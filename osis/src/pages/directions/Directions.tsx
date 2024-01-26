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
          translateY={['-40%', '60%']}
        >
          <WaveParallax wave={wave} />
        </Parallax>
      </div>

      <div className="directions__parallax-box-right">
        <Parallax 
          className="directions__parallax-right"
          translateX={['80%', '-30%']}
          translateY={['0', '-20']}
        >
          <WaveParallax wave={wave} />
        </Parallax>
      </div>

      <h2 className="directions__title directions__title--vendors">
        Вендори
      </h2>
      <p className="directions__vendors-text">
        Ми працюємо з дуже великим спектром обладнання, він включає, але не обмежується наступним 
      </p>

      <div className="directions__vendors-logos">
        {generateAmountCards(11).map(number => (
          <VendorCard key={number} number={number} />
        ))}
      </div>
    </section>
  )
}