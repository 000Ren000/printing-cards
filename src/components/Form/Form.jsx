import React from 'react';
import './Form.css'

function Form({handleClick}) {
  return (
   <>
     <form action="src/components/Form/Form" className="form">
       <h1 className="form__header">Печать карточек для сотрудников</h1>
       <label  className="form__label">ФИО</label>
       <input
         type="text"
         className="form__input"
         placeholder="Иванов Иван Ивонович"
       />
       <label  className="form__label">Последние 4 цифры штрих-кода</label>
       <input
         type="number"
         className="form__input"
         placeholder="1841"
       />
       <button className="form__btn" onClick={handleClick}>Печать</button>
     </form>
   </>
  );
}

export default Form;
