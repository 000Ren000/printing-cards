import './Card.css';
import React, {useRef, useState} from 'react';
import {useReactToPrint} from 'react-to-print';
import Form from '../Form/Form';
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

import Barcode from 'react-barcode';

function Card({shtih, name, functions}) {
  const cardRef = useRef();
  const [isYellowCard, setIsYellowCard] = useState(false);
  const handlePrint = useReactToPrint({
    content: () => cardRef.current,
  });
  const handleClick = (evt,) => {
    evt.preventDefault();
    handlePrint();
  }


  const saveImage = async (name, DomElement) => {
    const canvas = await html2canvas(DomElement);
    const dataURL = canvas.toDataURL('image/jpg');
    downloadjs(dataURL, `${name}.jpg`, 'image/jpg');
  }

  const handleSaveImage = async (e) => {
    e.preventDefault()
    console.log('Карточка:', cardRef.current)
    await saveImage(name, cardRef.current)


  }

  const imageUrl =`https://barcode.tec-it.com/barcode.ashx?data=${shtih}&code=EAN13&translate-esc=true`
  return (
    <>

      <Form functions={{...functions, handleClick, handleSaveImage}} color={isYellowCard} handleColor={(isYellow) => setIsYellowCard(isYellow)}/>
      <div className={`card ${isYellowCard ? 'card_background_yellow' : 'card_background_red'}`} ref={cardRef}>
        <div className="card__name-container">
          <div className="card__name">{name}</div>
        </div>
        {/*<img alt='Barcode Generator TEC-IT'*/}
        {/*     src={imageUrl}*/}
        {/*     className="card__shtrih"*/}
        {/*/>*/}
          <Barcode
              value={shtih}
              renderer="canvas"
              format="EAN13"
              className="card__shtrih"
              height={83}
          />
      </div>
    </>
  );
}

export default Card;
