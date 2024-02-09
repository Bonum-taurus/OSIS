import { Form } from '../../components/Form';
import './Contacts.scss';

import { Parallax } from 'react-scroll-parallax';
import { WaveParallax } from '../../components/WaveParallax';
import wave from '../../images/parallax/main-wave-parallax.png';

export const Contacts = () => {
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
  
        <div className="contacts__type">
          <span className="contacts__name">
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

        <div className="contacts__type">
          <span className="contacts__name">
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

        <div className="contacts__type">
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
            translateX={['-38%', '-38%']}
            translateY={['-38%', '25%']}
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