import React, {useEffect, useState} from 'react'
import './Form.css'


function Form(props) {
  const {changeName, changeCod, handleClick, handleSaveImage} =props.functions;
  const changeColor = () => {
    if (!props.color) props.handleColor(true);
    else props.handleColor(false);
  }


  return (
   <>
     <form action="src/components/Form/Form" className="form" onSubmit={handleClick}>
       <h1 className="form__header">Печать карточек для сотрудников</h1>
       <input
         type="text"
         className="form__input"
         placeholder="ФИО"
         onChange={(e) => changeName(e.target.value)}
       />
       <input
         type="number"
         className="form__input"
         placeholder="Введите штрих-код"
         onChange={(event) => changeCod(event.target.value)}
       />
       <div className="form__checkbox">
         <span className='form__label'>Желтая карточка</span>
         <div className="checkbox">
           <input className="checkbox__input" type="checkbox" onChange={changeColor}/>
         </div>
       </div>

       <button className="form__btn">Печать</button>
       <button onClick={handleSaveImage} className="form__btn">Сохранить</button>
     </form>
   </>
  );
}

export default Form;
