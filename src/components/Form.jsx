import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import Title from './Title.jsx'
import Help_Buttons from './Help-buttons.jsx'
import s from './css/Form.module.css'


const post_inp = {
  width: '45%',
}


class Form extends Component {

  render() {
    return (
      <form method="post" onSubmit={this.handlerSubmit} >
        <div className={s.flex}>
          <div className={s.left_block}>
            <div className={s.left_flex}>
              <label className={s.left_inp}>Імʼя<input className={s.left_inp} type="text" required></input></label>

              <label className={s.left_inp}>Фамілія<input className={s.left_inp} type="text" required></input></label>
            </div>
            <div>
              <label className={s.left_inp} >Назва компанії, організаці<input className={s.left_inp} type="text" required></input></label>
              <label className={s.left_inp} >Email-адрес<input className={s.left_inp} type="email"></input></label>
              <label className={s.left_inp} >Номер телефону<InputMask className={s.left_inp} {...this.props} mask="+3\8\0 99 999 99 99" maskChar=" " required /></label>

            </div>
          </div >

          <div className={s.right_block}>
            <label className={s.right_inp}>Країна<input className={s.right_inp} type="text" required></input></label>

            <div className={s.right_flex}>
              <label className={s.right_inp} >Місто<input className={s.right_inp} type="text" required></input></label>
              <label className={s.right_inp} >Штат, район<input className={s.right_inp} type="text" required></input></label>
            </div>
            <label className={s.right_inp} >Адреса<input className={s.right_inp} type="text" required></input></label>
            <label className={s.right_inp} >Поштовий індекс<input style={post_inp} className={s.right_inp} type="text" pattern="[0-9]{5}" required></input></label>
          </div >
        </div>

        <Title title_text={'Види допомоги'} />
        <p>Ви можете змінити від допомоги</p>
        <Help_Buttons />
      </form >
    )
  }
}

export default Form;
