import React from 'react';

import './WaveParallax.scss';

type Props = {
  wave: string,
}

export const WaveParallax: React.FC<Props> = ({ wave }) => {
  return (
    <div className="wave-parallax">
      <img
        className="wave-parallax__wave" 
        src={wave} 
        alt="wave" />
    </div>
  )
}