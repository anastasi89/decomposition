import React from "react";

/**
 * "Форма поиска" - вывод формы поиска, окна ввода, кнопки отправки запроса
 */


export default function SearchForm() {
  return (
    <form className='search-form'>
      <label htmlFor='search' className='label-search'>
        Яндекс
      </label>
      <input type='search' id='search' className='search' />
      <button className='button-search'>Найти</button>
    </form>
  );
}
