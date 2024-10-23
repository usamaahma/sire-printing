import React from 'react'
import Wallet1 from '../../components/Rigid-boxes/wallet-rigid-boxes/wallet';
import Walletspec from '../../components/Rigid-boxes/wallet-rigid-boxes/walletspecs';
import Walletstock from '../../components/Rigid-boxes/wallet-rigid-boxes/walletstock';
import Walletfinishing1 from '../../components/Rigid-boxes/wallet-rigid-boxes/walletfinishing';
import Walletproduct1 from '../../components/Rigid-boxes/wallet-rigid-boxes/walletrelatedproduct';
import WalletText from '../../components/Rigid-boxes/wallet-rigid-boxes/wallettxt';
import Walletblog from '../../components/Rigid-boxes/wallet-rigid-boxes/walletblog';

function Walletrigidboxpage() {
  return (
    <div>
        <Wallet1/>
        <Walletspec/>
        <Walletstock/>
        <Walletfinishing1/>
        <Walletproduct1/>
        <WalletText/>
        <Walletblog/>
    </div>
  )
}

export default Walletrigidboxpage;
