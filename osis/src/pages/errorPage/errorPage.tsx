import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errorPage.scss';

type Props = {
  error: string;
}

const ErrorPage: React.FC<Props> = ({ error }) => {
  const navigate = useNavigate();

  return(
    <div className="error">
      <h2 className="error__title">
        Щось пішло не так
      </h2>
      <p className="error__text">
        Перезавантажте сторінку
        <br />
        або спробуйте пізніше
      </p>
      <button 
        className="error__button"
        onClick={() => navigate('/')}
      >
        <span className="error__button-text">
          На головну
        </span>
      </button>
    </div>
  )
}

export default ErrorPage;