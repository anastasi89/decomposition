import React from "react";

/**
 * "Погода" - вывод информации о погоде, выводит картинки погоды и температуры
 */

export default function Weather() {
  return (
    <div className='weather'>
      <img src='' alt='' />
      <span className='live-weather'></span>
      <div className='weather-day'>
        <span className='weather-morning'></span>
        <span className='weather-evening'></span>
      </div>
    </div>
  );
}
