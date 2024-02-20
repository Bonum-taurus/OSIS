import './Main.scss';
import title from '../../images/main/main-title.svg';
import ten from '../../images/main/10+.png';

import { Parallax } from 'react-scroll-parallax';
import { WaveParallax } from '../../components/WaveParallax';
import wave from '../../images/parallax/main-wave-parallax.png';

import { Slider } from '../../components/Slider';

import useMediaQuery from '@mui/material/useMediaQuery';

export const Main = () => {
  const lapTop = useMediaQuery('(max-width:1024px)');
  const tablet = useMediaQuery('(max-width:744px)');
  const mobile = useMediaQuery('(max-width:500px)');

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
          translateY={lapTop ? ['-100%', '380%'] : ['-100%', '400%']}
          translateX={lapTop ? 
            tablet ? ['-40%', '-40%'] : ['-35%', '-35%'] : ['-70%', '30%']}
          scale={mobile ? ([0.5, 0.5]) : (lapTop ? tablet ? [0.7, 0.7] : [0.7, 1] : [1, 1])}
        >
          <WaveParallax wave={wave} />
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

      <section className="main__slider">
        <Slider/>
      </section>
    </div>
  )
}