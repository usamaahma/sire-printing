import React from 'react'
import Bakery1 from '../../components/Land-food-packaging/bakery-boxes/bakerybox'
import Bakeryspec from '../../components/Land-food-packaging/bakery-boxes/bakeryspecs'
import Bakeryportfolio from '../../components/Land-food-packaging/bakery-boxes/bakeryportfolio'
import Bakerystock from '../../components/Land-food-packaging/bakery-boxes/bakerystock'
import Bakeryfinishing1 from '../../components/Land-food-packaging/bakery-boxes/bakeryfinishing'
import Bakeryproduct1 from '../../components/Land-food-packaging/bakery-boxes/bakeryrelatedproduct'
import Bakeryblog from '../../components/Land-food-packaging/bakery-boxes/bakeryblog'
import BakeryText from '../../components/Land-food-packaging/bakery-boxes/bakerytxt'

function Bakeryboxpage() {
  return (
    <div>
      <Bakery1/>
        <Bakeryspec/>
        <Bakeryportfolio/>
        <Bakerystock/>
        <Bakeryfinishing1/>
        <Bakeryproduct1/>
        <BakeryText/>
        <Bakeryblog/>
    </div>
  )
}

export default Bakeryboxpage;
