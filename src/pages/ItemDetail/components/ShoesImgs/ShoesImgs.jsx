import React from 'react';
import './ShoesImgs.scss';
function ShoesImgs({ imageUrl }) {
  return (
    <ul className="shoesImgs">
      {imageUrl?.map(e => (
        <li className="shoesProduct" key={e}>
          <div className="ShoesImgBox">
            <img src={e} alt="나이키" className="shoesBigImg" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShoesImgs;
