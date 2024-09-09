import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({answer}) {
  return  <Banner status={"happy"}>
  <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{ answer}</strong>.</p>
</div>
</Banner>
}

export default LostBanner;
