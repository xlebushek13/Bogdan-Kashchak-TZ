import React from 'react';
import Title from './components/Title.jsx';
import Choise from './components/Choise.jsx'
import Form from './components/Form.jsx';
import './App.css';

const style_flex = {
  display: 'flex',
}


const App = () => {
  return (<>
    <Title title_text={'Заповніть форму'} />
    <Choise />
    <Form />
  </>
  )
}

export default App;
