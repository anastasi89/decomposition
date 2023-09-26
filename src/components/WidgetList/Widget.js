import React from "react";

/**
 * "Виджет"- вывод виджета, его названия и содержимого
 */

export default function Widget({ title, children }) {
  return (
    <div className='widget'>
      <h5>{title}</h5>
      {children}
    </div>
  );
}
