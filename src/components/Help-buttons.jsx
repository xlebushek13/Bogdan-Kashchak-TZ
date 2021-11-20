import React, { Component } from 'react';
import s from './css/Help-buttons.module.css'

class Help_Buttons extends Component {

  render() {
    return (
      <div className={s.block}>
        <label className={s.help_label}>
          <input className={s.radio} type="radio" name="help"></input>
          <img src="/images/hand.png"></img>
          <p>Зробити</p>
        </label>
        <label className={s.help_label}>
          <input className={s.radio} type="radio" name="help" checked></input>
          <img src="/images/wallet.png"></img>
          <p>Фінансова<br />допомога</p>
        </label>
        <label className={s.help_label}>
          <input className={s.radio} type="radio" name="help"></input>
          <img src="/images/clothes.png"></img>
          <p>Матеріальна<br />допомога</p>
        </label>
        <label className={s.help_label}>
          <input className={s.radio} type="radio" name="help"></input>
          <img src="/images/heart.png"></img>
          <p>Волонтерство</p>
        </label>
      </div >
    )

  }
}

export default Help_Buttons;
