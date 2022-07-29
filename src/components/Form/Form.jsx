import React from 'react';
import './Form.css'

const handleSubmit = (e) => {
  e.preventDefault();
  console.log();
}
function Form({functions}) {
  const {changeName, changeCod, handleClick} = functions

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
         placeholder="Последние 4 цифры штрих-кода"
         onChange={(event) => changeCod(event.target.value)}
       />
       <button className="form__btn">Печать</button>
     </form>
   </>
  );
}

export default Form;
