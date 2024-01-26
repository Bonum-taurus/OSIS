import React from 'react';
import classNames from 'classnames';
import './AccordionItem.scss';

interface section {
  title: string,
  text: string[],
}

type Props = {
  section: section,
  index: number,
  currentIndex: number | null,
  setCurrentIndex: (index: number | null) => void,
  lastIndex: number,
}

export const AccordionItem: React.FC<Props> = ({ 
  section, 
  index, 
  currentIndex,
  setCurrentIndex,
  lastIndex,
}) => {
  return (
    <div className={classNames('accordion-item', {
      'accordion-item--active': currentIndex === index,
      'accordion-item--last': index === lastIndex,
    })}>
      <button 
        className={classNames('accordion-item__triger', {
          'accordion-item__triger--last': index === lastIndex,
        })}
        onClick={() => {
          if (currentIndex === index) {
            setCurrentIndex(null)

            return;
          }
          setCurrentIndex(index)
        }}
      >
        <span className="accordion-item__triger-title">
          {section.title}
        </span>

        <span className="accordion-item__triger-arrow"/>
      </button>

      <div className={classNames('accordion-item__inner-box', {
        'accordion-item__inner-box--open': currentIndex === index,
      })}>
        <ul className="accordion-item__inner">
          {section.text.map((point) => (
            <li key={point} className="accordion-item__inner-point">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}