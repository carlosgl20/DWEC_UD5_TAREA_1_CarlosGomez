import React from 'react';

function AccordionItem({ index, question, answer, estaActivo, onClick }) {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <li className={`accordion_item ${estaActivo ? 'active' : ''}`}>
      <button className="button" onClick={handleClick}>
        <div className="control">{question}</div>
      </button>
      <div className={`answer_wrapper ${estaActivo ? 'open' : ''}`}>
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
}

export default AccordionItem;
