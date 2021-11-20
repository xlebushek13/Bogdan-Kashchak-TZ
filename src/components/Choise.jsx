import React from 'react';
import s from './css/Choise.module.css'


const Choise = () => {
  return (
    <div className={s.toggle}>
      <input type="radio" name="sizeBy" value="weight" id="sizeWeight" checked="checked" />
      <label for="sizeWeight">Фіз. особа</label>
      <input type="radio" name="sizeBy" value="dimensions" id="sizeDimensions" />
      <label for="sizeDimensions">Юр. особа</label>
    </div>);

}
export default Choise;
