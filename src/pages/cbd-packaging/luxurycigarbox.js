import React from 'react'
import Luxury from '../../components/cbd-packaging/cbd-luxury-cigar/luxurycigar';
import Luxuryspec from '../../components/cbd-packaging/cbd-luxury-cigar/luxurycigarspecs';
import Luxurystock from '../../components/cbd-packaging/cbd-luxury-cigar/luxurycigarstock';
import Luxuryfinishing1 from '../../components/cbd-packaging/cbd-luxury-cigar/luxurycigarfinishing';
import Luxuryproduct1 from '../../components/cbd-packaging/cbd-luxury-cigar/luxurycigarrelatedproduct';

function Luxurycigarbox() {
  return (
    <div>
      <Luxury/>
        <Luxuryspec/>
        <Luxurystock/>
        <Luxuryfinishing1/>
        <Luxuryproduct1/>
    </div>
  )
}

export default Luxurycigarbox;
