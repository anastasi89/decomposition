import React from "react";
import Widget from "./Widget";
import Weather from "./Weather";
import Visited from "./Visited";
import Cart from "./Cart";
import TVPrograms from "./TVPrograms";
import Live from "./Live";

/**
 "Блок дополнительных виджетов"
 * Вывод виджетов "Погода", "Посещаемое", "Карта", "Телепрограмма", "Эфир"
 */

export default function WidgetList() {
  return (
    <>
      <Widget title='Погода'>
        <Weather />
      </Widget>
      <Widget title='Посещаемое'>
        <Visited />
      </Widget>
      <Widget title='Карта Германии'>
        <Cart />
      </Widget>
      <Widget title='Телепрограмма'>
        <TVPrograms />
      </Widget>
      <Widget title='Эфир'>
        <Live />
      </Widget>
    </>
  );
}
