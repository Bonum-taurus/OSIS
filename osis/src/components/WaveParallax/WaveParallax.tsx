import './WaveParallax.scss';
import wave from '../../images/parallax/wave-parallax.png';

export const WaveParallax = () => {
  return (
    <div className="wave-parallax">
      <img
        className="wave-parallax__wave" 
        src={wave} 
        alt="wave" />
    </div>
  )
}