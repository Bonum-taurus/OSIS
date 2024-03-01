import { Form } from '../../components/Form';
import './Contacts.scss';

import { Parallax } from 'react-scroll-parallax';
import { WaveParallax } from '../../components/WaveParallax';
import wave from '../../images/parallax/main-wave-parallax.png';

import useMediaQuery from '@mui/material/useMediaQuery';

const Contacts = () => {
  const deskTop4k = useMediaQuery('(min-width:2000px)');
  const lapTop = useMediaQuery('(max-width:1024px)');
  const tablet = useMediaQuery('(max-width:744px)');
  const pre_mobile = useMediaQuery('(max-width:625px)');
  const mobile = useMediaQuery('(max-width:500px)');

  return (
    <>
      <section className="contacts">
        <h2 className="contacts__title">
        Контакти
        </h2>
        <div className="contacts__type contacts__type--address">
          <span className="contacts__name">
            Адреса
          </span>
          <a 
            href="https://maps.app.goo.gl/iQSN8Cmrsk5tkQiz9" 
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            вул. Сирецька 9, Київ, 04073 БЦ «Маяк», офіс 20
          </a>
        </div>
  
        <div className="contacts__type contacts__type--email">
          <span className="contacts__name contacts__name--contacts">
            Контакти
          </span>

          <span className="contacts__name contacts__name--email">
            Email
          </span>
          <a 
            href="mailto:sales@osis.com.ua" 
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            sales@osis.com.ua
          </a>
        </div>

        <div className="contacts__type contacts__type--phone">
          <span className="contacts__name contacts__name--phone">
            Телефон
          </span>
          <a 
            href="tel:+3800445009605" 
            className="contacts__link"
            target="_blank"
            rel="noreferrer"
          >
            (044) 500-96-05
          </a>
        </div>

        <div className="contacts__type contacts__type--social">
          <span className="contacts__name">
            Соцмережі
          </span>
          <div className="contacts__social-icons">
            <a 
              className="contacts__link contacts__link--linkedin"
              href="https://www.linkedin.com/company/osis/?trk=top_nav_home"
              target="_blank"
              rel="noreferrer"
              title="linkedin of company"
            />
    
            <a 
              className="contacts__link contacts__link--facebook"
              href="https://www.facebook.com/osis.com.ua"
              target="_blank"
              rel="noreferrer"
              title="facebook of company"
            />
          </div>
        </div>

        <div className="contacts__parallax-box">
          <Parallax 
            className="contacts__parallax" 
            translateX={deskTop4k ? ['-28%', '-28%'] : lapTop ? ['-48%', '-48%'] : ['-38%', '-38%']}
            translateY={mobile ? ['-88%', '85%'] : tablet ? ['-68%', '55%'] : ['-38%', '25%']}
            scaleX={deskTop4k ? [1.3, 1.3] : mobile ? [0.6, 0.6] : pre_mobile ? [0.7, 0.7] : lapTop ? [0.9, 0.9] : [1, 1]}
            scaleY={deskTop4k ? [1.3, 1.3] : mobile ? [0.6, 0.6] : pre_mobile ? [0.8, 0.8] : [1, 1]}
          >
            <WaveParallax wave={wave} />
          </Parallax>
        </div>

        <div className="contacts__question">
          <h3 className="contacts__subtitle">
            Маєте питання?
          </h3>
          <div className="contacts__form">
            <Form/>
          </div>
        </div>
      </section>

      <div className="contacts__map-box">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.188590890863!2d30.4665584!3d50.4934477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd8e55fc1f5f%3A0x13ad9a7ad4c796fd!2sMayak!5e0!3m2!1sen!2sua!4v1706895535405!5m2!1sen!2sua" 
          loading="lazy" 
          width="100%"
          height="100%"
          title="google map"
          className="contacts__map"
        ></iframe>
      </div>
    </>
  )
}

export default Contacts;