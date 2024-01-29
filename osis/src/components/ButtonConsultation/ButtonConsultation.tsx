import { useNavigate } from 'react-router-dom';

import './ButtonConsultation.scss';
import arrow from '../../images/button/arrow-nav.svg';

export const ButtonConsultation = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="button-consultation"
      onClick={() => navigate('/contacts')}
    >
      <span className="button-consultation__name">
        Зв’язатися з нами
      </span>
      <span className="button-consultation__arrow">
        <img src={arrow} alt="arrow" />
      </span>
    </button>
  )
}