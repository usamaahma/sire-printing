import React from 'react';
import './App.css';
import Firstnav1 from './components/navbars/firstnav';
import Mainnav1 from './components/navbars/mainnav';
import Carousel1 from './components/carousel';
import Whysire1 from './components/whysire';
import Enjoysire1 from './components/enjoysire';
import Custompakaging1 from './components/custompakaging';
import Custombox1 from './components/custombox';
import Hotselling1 from './components/hotselling';
import Sireprintingtxt1 from './components/sireprintingtxt';
import Reviewcarousel1 from './components/reviewcarousel';


function App() {
  return (
    <div className="App">
      <Firstnav1 />
      <Mainnav1/>
      <Carousel1/>
      <Whysire1/>
      <Enjoysire1/>
      <Custompakaging1/>
      <Custombox1/>
      <Hotselling1/>
      <Sireprintingtxt1/>
      <Reviewcarousel1/>
    </div>
  );
}

export default App;
