import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import data from '../data';

function Accordion() {
  const [activo, setActivo] = useState(null);

  const handleClick = (index) => {
    setActivo(index === activo ? null : index);
  };

  return (
    <ul className="accordion">
      {data.map((item, index) => ( //se utiliza el map como se indica a utilizar en los apuntes
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          estaActivo={index === activo}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default Accordion;

