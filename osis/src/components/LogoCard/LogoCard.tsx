import React from 'react';
import './LogoCard.scss';

type Props = {
  number: string;
}

export const LogoCard: React.FC<Props> = ({ number }) => {
  return (
    <div className="logo">
      <div className={`logo__brand logo__brand--${number}`}></div>
    </div>
  )
}