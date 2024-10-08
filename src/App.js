import React from 'react';
import './App.css';
import Firstnav1 from './components/navbars/firstnav';
import Mainnav1 from './components/navbars/mainnav';
import Carousel1 from './components/carousel';
import Whysire1 from './components/whysire';
import Enjoysire1 from './components/enjoysire';


function App() {
  return (
    <div className="App">
      <Firstnav1 />
      <Mainnav1/>
      <Carousel1/>
      <Whysire1/>
      <Enjoysire1/>
    </div>
  );
}

export default App;
