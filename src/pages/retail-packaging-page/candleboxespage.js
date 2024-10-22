import React from 'react'
import Candlespec from '../../components/custom-retail-packaging/candle-boxes/candlespecs'
import Candlestock from '../../components/custom-retail-packaging/candle-boxes/candlestock'
import Candlefinishing1 from '../../components/custom-retail-packaging/candle-boxes/candlefinishing'
import Candleproduct1 from '../../components/custom-retail-packaging/candle-boxes/candlerelatedproduct'
import CandleText from '../../components/custom-retail-packaging/candle-boxes/candletxt'
import Candleblog from '../../components/custom-retail-packaging/candle-boxes/candleblog'
import Candle1 from '../../components/custom-retail-packaging/candle-boxes/candlebox'

function Candleboxespage() {
  return (
    <div>
        <Candle1/>
        <Candlespec/>
        <Candlestock/>
        <Candlefinishing1/>
        <Candleproduct1/>
        <CandleText/>
        <Candleblog/>
    </div>
  )
}

export default Candleboxespage
