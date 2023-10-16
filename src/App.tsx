import React from 'react';
import { Header } from './header/Header';
import { MainSection } from './section/main/Main';
import { ThisWeek } from './section/ThisWeek/ThisWeek';
import { BestNFTs } from './section/bestNft/BestNFTs';

function App() {
  return (
    <div >
      <Header/>
      <MainSection/>
      <ThisWeek/>
      <BestNFTs/>
    </div>
  );
}

export default App;
