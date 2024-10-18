import React from 'react'
import Incense from '../../components/all product/incense-boxes/incensebox';
import Incensespec from '../../components/all product/incense-boxes/incensespecs';
import Incensestock from '../../components/all product/incense-boxes/incensestock';
import Incensefinishing1 from '../../components/all product/incense-boxes/incensefinishing';
import Incenseproduct1 from '../../components/all product/incense-boxes/incenserelatedproduct';
import Incensetxt from '../../components/all product/incense-boxes/incensetxt';

function Incenseboxpage() {
  return (
    <div>
       <Incense/>
        <Incensespec/>
        <Incensestock/>
        <Incensefinishing1/>
        <Incenseproduct1/>
        <Incensetxt/>

    </div>
  )
}

export default Incenseboxpage;
