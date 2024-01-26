import React from 'react';
import './VendorCard.scss';

type Props = {
  number: string
}

export const VendorCard: React.FC<Props> = ({ number }) => {
  return (
    <div className="vendor">
      <div className={`vendor__logo vendor__logo--${number}`}></div>
    </div>
  )
}