import { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';
import data from './data';

function App() {
  return (
    <div>
      <Header/>
      <Accordion data={data}/>
    </div>
  );
}

export default App;
