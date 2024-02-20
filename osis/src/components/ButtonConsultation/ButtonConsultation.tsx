import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './ButtonConsultation.scss';
import arrow from '../../images/button/arrow-nav.svg';

type Props = {
  isSubmiting?: boolean,
  errorName?: boolean,
  errorPhone?: boolean,
  success?: boolean,
  notSuccess?: string,
  setIsOpenBurger?: (burger: boolean) => void;
  setIsBodyHidden?: (hidden: boolean) => void;
}

export const ButtonConsultation: React.FC<Props> = ({ 
  isSubmiting,
  errorName,
  errorPhone,
  success,
  notSuccess,
  setIsOpenBurger,
  setIsBodyHidden,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    if (pathname !== '/contacts') {
      navigate('/contacts');
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (setIsOpenBurger && setIsBodyHidden) {
        setIsOpenBurger(false);
        setIsBodyHidden(false);
      }

      return;
    }
  }

  return (
    <button
      type="submit" 
      className={classNames('button-consultation', {
        'button-consultation--disable': errorName || errorPhone,
        'button-consultation--submiting': isSubmiting,
      })}
      style={
        pathname === '/contacts' ?
          {transform: success || notSuccess ? 'translateY(0)' : 'translateY(-85px)'} :
          {transform: 'translateY(0)'}
      }
      onClick={handleClick}
    >
      <span className="button-consultation__name">
        Зв’язатися з нами
      </span>

      <span className="button-consultation__arrow">
        <img 
          className="button-consultation__arrow-icon"
          src={arrow} 
          alt="arrow"
        />
      </span>
    </button>
  )
}