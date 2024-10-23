import React from 'react'
import Cellphone1 from '../../components/Rigid-boxes/cell-phone-boxes/cellphonebox';
import Cellphonestock from '../../components/Rigid-boxes/cell-phone-boxes/cellphonestock';
import Cellphonefinishing1 from '../../components/Rigid-boxes/cell-phone-boxes/cellphonefinishing';
import Cellphoneproduct1 from '../../components/Rigid-boxes/cell-phone-boxes/cellphonerelatedproduct';
import CellphoneText from '../../components/Rigid-boxes/cell-phone-boxes/cellphonetxt';
import Cellphoneblog from '../../components/Rigid-boxes/cell-phone-boxes/cellphoneblog';
import Cellphonespec from '../../components/Rigid-boxes/cell-phone-boxes/cellphonespecs';

function Cellphoneboxpage() {
  return (
    <div>
        <Cellphone1/>
        <Cellphonespec/>
        <Cellphonestock/>
        <Cellphonefinishing1/>
        <Cellphoneproduct1/>
        <CellphoneText/>
        <Cellphoneblog/>
    </div>
  )
}

export default Cellphoneboxpage;
