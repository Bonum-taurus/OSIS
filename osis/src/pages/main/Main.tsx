import './Main.scss';
import title from '../../images/main/main-title.svg';
import ten from '../../images/main/10+.png';
import { LogoCard } from '../../components/LogoCard';

import { Parallax } from 'react-scroll-parallax';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/grid";
import "swiper/css/pagination";
import { WaveParallax } from '../../components/WaveParallax';

const generateAmountCards = (amount: number) => {
  const result = [];

  for (let i = 1; i <= amount; i++) {
    result.push(`${i}`);
  }

  return result;
}

export const Main = () => {
  return (
    <div className="main">
      <section className="main__top">
        <h1 className="main__top-title">
          <img
            src={title}
            alt="main title"
            className="main__top-title-img"
          />
        </h1>

        <div className="main__top-waves-box">
          <div className="main__top-waves-img"></div>
        </div>
      </section>

      <div className="main__parallax-box">
        <Parallax 
          className="main__parallax" 
          translateY={['-100%', '400%']}
          translateX={['-70%', '30%']}
        >
          <WaveParallax />
        </Parallax>

        <section className="main__about about">
          <div className="about__name-experience">
            Про нас
          </div>
          <h2 className="about__title-experience">
            Досвід
          </h2>
          <p className="about__text-experience">
            Компанія OSIS - це досвідчена команда у сфері впровадження та підтримки ІТ-інфраструктури.
            <br />
            Ми пишаємось нашим багаторічним досвідом роботи з різноманітними клієнтами - від великих корпорацій до малих підприємств та державних установ.
            <br />
            Наш підхід полягає у тому, щоб надавати комплексні ІТ-рішення, які точно відповідають потребам кожного клієнта, допомагаючи їм досягти високих бізнес-результатів.
          </p>

          <div className="about__name-quality">
            Наші цінності
          </div>
          <h2 className="about__title-quality">
            Якість
          </h2>
          <p className="about__text-quality">
            Основу нашої корпоративної філософії складають професіоналізм, інноваційність та партнерство.
            <br />
            Ми постійно вдосконалюємо наші послуги, щоб вони відповідали найвищим стандартам.
            <br />
            Клієнтська орієнтованість для нас - не просто слова, а зобов'язання розуміти унікальні потреби кожного бізнесу та надавати оптимальні технологічні рішення, які сприяють їх росту та успіху.
          </p>
        </section>

        <section className="main__indicators indicators">
        <div className="indicators__it">
          <img 
            src={ten}
            alt="namber ten" 
            className="indicators__it-ten"
          />
          <div className="indicators__it-name">
            на ринку IT
          </div>
        </div>

        <div className="indicators__success">
          <h2 className="indicators__success-nine-hundred">
            900+
          </h2>
          <div className="indicators__success-name">
            успішних проектів
          </div>
        </div>
        
        <div className="indicators__fortune">
          <h2 className="indicators__fortune-eight">
            8+
          </h2>
          <div className="indicators__fortune-name">
            клієнтів з fortune 500
          </div>
        </div>

        <div className="indicators__partners">
          <h2 className="indicators__partners-twenty">
            20+
          </h2>
          <div className="indicators__partners-name">
            партнерів
          </div>
        </div>
        </section>

        <section className="main__clients clients">
          <h2 className="clients__title">
            Клієнти
          </h2>
          <p className="clients__text">
            Наша гнучкість, клієнтоорієнтованість та якісний підхід до надання послуг з кожним роком завойовує все більше довіри та поповнює список наших постійних партнерів
          </p>
        </section>
      </div>

      <section className="main__slider slider">
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
      </section>
    </div>
  )
}