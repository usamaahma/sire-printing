import React from 'react'
import Candy from '../../components/custom-retail-packaging/candy-boxes/candybox';
import Candyspec from '../../components/custom-retail-packaging/candy-boxes/candyspecs';
import Candystock from '../../components/custom-retail-packaging/candy-boxes/candystock';
import Candyfinishing1 from '../../components/custom-retail-packaging/candy-boxes/candyfinishing';
import Candyproduct1 from '../../components/custom-retail-packaging/candy-boxes/candyrelatedproduct';
import CandyText from '../../components/custom-retail-packaging/candy-boxes/candytxt';
import Candyblog from '../../components/custom-retail-packaging/candy-boxes/candyblog';

function Candyboxpage() {
  return (
    <div>
      <Candy/>
        <Candyspec/>
        <Candystock/>
        <Candyfinishing1/>
        <Candyproduct1/>
        <CandyText/>
        <Candyblog/>
    </div>
  )
}

export default Candyboxpage;
