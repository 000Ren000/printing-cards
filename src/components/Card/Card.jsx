import React, {useRef} from 'react';
import './Card.css';

import {useReactToPrint} from 'react-to-print';

function Card({shtih, name}) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleClick = (evt) => {
    evt.preventDefault();
    handlePrint();
  }
  return (
    <>
      <div className="card" ref={componentRef}>
        <div className="card__name-container">
          <div className="card__name">{name}</div>
        </div>
        <img alt='Barcode Generator TEC-IT'
             src={`https://barcode.tec-it.com/barcode.ashx?data=250000000${shtih}&code=EAN13&translate-esc=true`}
             className="card__shtrih"
        />
      </div>

      <button onClick={handleClick}>ok</button>
    </>
  );
}

export default Card;
