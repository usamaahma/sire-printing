import React from 'react'
import Cereal1 from '../../components/Land-food-packaging/cereal-boxes/cerealbox';
import Cerealspec from '../../components/Land-food-packaging/cereal-boxes/cerealspecs';
import Cerealstock from '../../components/Land-food-packaging/cereal-boxes/cerealstock';
import Cerealfinishing1 from '../../components/Land-food-packaging/cereal-boxes/cerealfinishing';
import Cerealproduct1 from '../../components/Land-food-packaging/cereal-boxes/cerealrelatedproduct';
import CerealText from '../../components/Land-food-packaging/cereal-boxes/cerealtxt';
import Cerealblog from '../../components/Land-food-packaging/cereal-boxes/cerealblog';

function Cerealboxpage() {
  return (
    <div>
        <Cereal1/>
        <Cerealspec/>
        <Cerealstock/>
        <Cerealfinishing1/>
        <Cerealproduct1/>
        <CerealText/>
        <Cerealblog/>
    </div>
  )
}

export default Cerealboxpage;
