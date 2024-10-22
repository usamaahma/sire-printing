import React from 'react'
import Bathbomb1 from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombboxes';
import Bathbombspec from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombspecs';
import Bathbombstock from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombstock';
import Bathbombfinishing1 from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombfinishing';
import Bathbombproduct1 from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombrelatedproduct';
import BathBombTxt from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombtxt';
import Bathportfolio from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombportfolio';
import Bathrelatedblog from '../../components/custom-retail-packaging/bath-bomb-boxes/bathbombblog';

function Bathbombpage() {
  return (
    <div>
      <Bathbomb1/>
        <Bathbombspec/>
        <Bathportfolio/>
        <Bathbombstock/>
        <Bathbombfinishing1/>
        <Bathbombproduct1/>
        <BathBombTxt/>
        <Bathrelatedblog/>

    </div>
  )
}

export default Bathbombpage;
