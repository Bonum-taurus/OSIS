import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './ButtonConsultation.scss';
import arrow from '../../images/button/arrow-nav.svg';
import spinner from '../../images/button/spinner.png';

type Props = {
  isSpinner?: boolean,
  errorName?: boolean,
  errorPhone?: boolean
}

export const ButtonConsultation: React.FC<Props> = ({ 
  isSpinner,
  errorName,
  errorPhone,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname !== '/contacts') {
      navigate('/contacts');

      return;
    }
  }

  return (
    <button
      type="submit" 
      className={classNames('button-consultation', {
        'button-consultation--disable': errorName || errorPhone,
        'button-consultation--block-submit': isSpinner,
      })}
      onClick={handleClick}
    >
      <span className="button-consultation__name">
        {isSpinner ? 'Відправка' : 'Зв’язатися з нами'}
      </span>

      <>
        {isSpinner ? (
          <span className="button-consultation__spinner">
            <img 
              className="button-consultation__spinner-icon"
              src={spinner} 
              alt="spinner"
            />
          </span>
        ) : (
          <span className="button-consultation__arrow">
            <img src={arrow} alt="arrow"/>
          </span>
        )}
      </>
    </button>
  )
}