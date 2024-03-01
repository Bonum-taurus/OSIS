import { ButtonConsultation } from '../../components/ButtonConsultation';
import './Projects.scss';

import { Parallax } from 'react-scroll-parallax';
import { WaveParallax } from '../../components/WaveParallax';
import wave_left from '../../images/parallax/projects-wave-parallax.png';
import wave_right from '../../images/parallax/directions-wave-parallax.png';

import useMediaQuery from '@mui/material/useMediaQuery';

const Projects = () => {
  const deskTop4k = useMediaQuery('(min-width:2000px)');
  const deskTop = useMediaQuery('(max-width:1279px)');
  const lapTop = useMediaQuery('(max-width:1024px)');
  const tablet = useMediaQuery('(max-width:744px)');

  return (
    <section className="projects">
      <h2 className="projects__title">
        Проекти
      </h2>

      <h3 className="projects__subtitle">
        Porsche Ukraine
      </h3>
      <article className="projects__block">
        <h4 className="projects__name">
          Завдання
        </h4>
        <p className="projects__text">
          Впровадження та налаштування СХД NetApp
        </p>

        <h4 className="projects__name">
          Рішення
        </h4>
        <p className="projects__text">
          Проведено пілотне тестування на реальних даних замовника.Отримані дані з використанням обладнання NetApp FAS2240-4 показали хороші результати.
        </p>
      </article>

      <div className="projects__parallax-box-left">
        <Parallax 
          className="projects__parallax-left"
          translateY={['-80%', '160%']}
          translateX={lapTop ? ['-38%', '-38%'] : deskTop ? ['-20%', '-20%'] : ['0', '0']}
          scaleX={deskTop4k ? [1.3, 1.3] : tablet ? [0.7, 0.7] : [1, 1]}
          scaleY={deskTop4k ? [1.3, 1.3] : tablet ? [0.7, 0.7] : [1, 1]}
        >
          <WaveParallax wave={wave_left} />
        </Parallax>
      </div>

      <h3 className="projects__subtitle">
        «Українські вертольоти»
      </h3>
      <article className="projects__block projects__block--helicopters">
        <h4 className="projects__name">
          Завдання
        </h4>
        <p className="projects__text">
          Побудова розподіленої СКС і системи контролю доступу
        </p>

        <h4 className="projects__name">
          Рішення
        </h4>
        <p className="projects__text">
          Реалізований масштабний проект з модернізації існуючої інфраструктури СКС, а також її розширення. Включно з відео наглядом і системами контролю доступу.
        </p>
      </article>

      <div className="projects__parallax-box-right">
        <Parallax 
          className="projects__parallax-right"
          translateY={['0%', '-180%']}
          translateX={lapTop ? ['33%', '33%'] : deskTop ? ['10%', '10%'] : ['0', '0']}
          scaleX={deskTop4k ? [1.3, 1.3] : tablet ? [0.7, 0.7] : [1, 1]}
          scaleY={deskTop4k ? [1.3, 1.3] : tablet ? [0.7, 0.7] : [1, 1]}
        >
          <WaveParallax wave={wave_right} />
        </Parallax>
      </div>


      <h3 className="projects__subtitle">
        «КОСМО» 
      </h3>
      <article className="projects__block">
        <h4 className="projects__name">
          Завдання
        </h4>
        <p className="projects__text">
          Побудова бездротової інфраструктури. Модернізація периметра мережі і побудова відмовостійкого периметру мережі передачі даних.
        </p>

        <h4 className="projects__name">
          Рішення
        </h4>
        <p className="projects__text">
          Побудований захищений периметр мережі, два незалежних модуля Internet і WAN, внутрішня і зовнішня DMZ. Організовано збір статистики з використанням протоколу NetFlow. Також реалізована бездротова інфраструктура в логістичному центрі. Архітектура побудована на топових продуктах лінійки Cisco. Як продукт для моніторингу були обрані Cisco Prime Infrastructure та Fluke Networks.
        </p>
      </article>

      <h3 className="projects__subtitle">
        Один із найбільших банків України
      </h3>
      <article className="projects__block">
        <h4 className="projects__name">
          Завдання
        </h4>
        <p className="projects__text">
          Підвищення рівня безпеки віртуальної інфраструктури Банку.
        </p>

        <h4 className="projects__name">
          Рішення
        </h4>
        <p className="projects__text">
          Реалізовано унікальний у своєму роді проект з розвитку та підвищення рівня безпеки віртуальної інфраструктури, що дозволило значно полегшити систему виявлення інцидентів, завдяки введенню нормативних документів, що регламентують як розмежування доступу зокрема, так і роботу віртуальної інфраструктури в цілому.
        </p>
      </article>

      <h3 className="projects__subtitle projects__subtitle--consultation">
        Потрібна консультація?
      </h3>

      <div className="projects__button-consultation">
        <ButtonConsultation/>
      </div>
    </section>
  )
}

export default Projects;