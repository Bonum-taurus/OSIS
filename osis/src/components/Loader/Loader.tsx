import './Loader.scss';

export const Loader = () => {
  return (
    <div className="loader">
      <span className="loader__circle loader__circle--1"></span>
      <span className="loader__circle loader__circle--2"></span>
      <span className="loader__circle loader__circle--3"></span>
      <span className="loader__circle loader__circle--4"></span>
    </div>
  )
}