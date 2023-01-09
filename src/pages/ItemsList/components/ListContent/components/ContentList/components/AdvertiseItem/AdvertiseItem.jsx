import React from 'react';
import { VideoHTMLAttributes } from 'react';

function AdvertiseItem(props) {
  return (
    <div className="video">
      <video muted autoPlay loop width="100%">
        <source src="/videos/nikeRun33.mp4" type="video/mp4" alt="Nike Run" />
      </video>
    </div>
  );
}

export default AdvertiseItem;
