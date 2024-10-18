import React from 'react'
import Rigid1 from '../../components/cbd-packaging/cbd-rigid-boxes/rigidboxes';
import Rigidspec from '../../components/cbd-packaging/cbd-rigid-boxes/rigidspecs';
import Rigidstock from '../../components/cbd-packaging/cbd-rigid-boxes/rigidstock';
import Rigidfinishing1 from '../../components/cbd-packaging/cbd-rigid-boxes/rigidfinishing';
import Rigidproduct1 from '../../components/cbd-packaging/cbd-rigid-boxes/rigidrelatedproduct';
import Rigidtxt from '../../components/cbd-packaging/cbd-rigid-boxes/rigidtxt';

function Rigidciggeratebox() {
  return (
    <div>
      <Rigid1/>
        <Rigidspec/>
        <Rigidstock/>
        <Rigidfinishing1/>
        <Rigidproduct1/>
        <Rigidtxt/>
    </div>
  )
}

export default Rigidciggeratebox;
