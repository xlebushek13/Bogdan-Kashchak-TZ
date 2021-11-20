import React, { Component } from 'react';
import s from './css/Title.module.css'


function Title(props) {
  return (

    <div>
      <h1>{props.title_text}</h1>
    </div >
  );

}



export default Title;
