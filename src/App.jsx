
import { useState } from 'react';
import Header from './components/Header';
import Empowering from './components/Empowering';
import Metadata from './components/Metadata';
import Faq from './components/Faq';
import Contect_us from './components/Contect_us';
import Navbar from './components/Navbar';

function App() {
 

  return (
   
      <section className=" bg-bg-color">
        <Header/>
        <Empowering/>
        <Metadata/>
        <Faq/>
        <Contect_us/>
        <Navbar/>
      </section>
   
  );
}

export default App;
