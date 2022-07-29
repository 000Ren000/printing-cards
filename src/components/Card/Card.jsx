import React, {useRef} from 'react';
import './Card.css';

function Card({shtih, name}) {
    const ref = useRef();

  return (
    <>
      <div className="card" ref={ref}>
        <div className="card__name-container">
          <div className="card__name">{name}</div>
        </div>
        <img alt='Barcode Generator TEC-IT'
             src={`https://barcode.tec-it.com/barcode.ashx?data=250000000${shtih}&code=EAN13&translate-esc=true`}
             className="card__shtrih"
        />
      </div>
    </>
  );
}

export default Card;
