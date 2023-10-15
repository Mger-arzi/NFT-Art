import React from 'react';
import { Header } from './header/Header';
import { MainSection } from './section/main/Main';
import { ThisWeek } from './section/ThisWeek/ThisWeek';
import { Card } from './componentc/Card';

function App() {
  return (
    <div >
      <Header/>
      <MainSection/>
      <ThisWeek/>
     
    </div>
  );
}

export default App;
