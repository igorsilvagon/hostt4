import React from 'react';
import AirbnbAd from './AirbnbAd';

export const AirbnbAds = ({ codes = [] }) => codes.length > 0
? (
  <div class="airbnb-ads">
    <div class="airbnb-ads__container">
      {codes.map(code => (
        <AirbnbAd code={code} />
      ))}
    </div>
  </div>
)
: null;
