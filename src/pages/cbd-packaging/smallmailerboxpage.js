import React from 'react'
import Smallmail1 from '../../components/cbd-packaging/cbd-small-mailer/smallmail';
import Smallmailspec from '../../components/cbd-packaging/cbd-small-mailer/smallmailerspecs';
import Smallmailstock from '../../components/cbd-packaging/cbd-small-mailer/smallmailerstock';
import Smallmailfinishing1 from '../../components/cbd-packaging/cbd-small-mailer/smallmailerfinishing';
import Smallmailproduct1 from '../../components/cbd-packaging/cbd-small-mailer/smallmailerrelatedproduct';
import Smallportfolio from '../../components/cbd-packaging/cbd-small-mailer/smallrelatedportfolio';
import Smallrelatedblog from '../../components/cbd-packaging/cbd-small-mailer/smallmailerrelatedblog';

function Smallmailerboxpage() {
  return (
    <div>
         <Smallmail1/>
        <Smallmailspec/>
        <Smallportfolio/>
        <Smallmailstock/>
        <Smallmailfinishing1/>
        <Smallmailproduct1/>
         <Smallrelatedblog/>
      
    </div>
  )
}

export default Smallmailerboxpage;
