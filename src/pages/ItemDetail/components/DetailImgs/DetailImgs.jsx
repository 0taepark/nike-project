import React from 'react';
import './DetailImgs.scss';

function DetailImgs({ imageUrl, openShoesModal }) {
  return (
    <ul className="detailImgs">
      {imageUrl?.map(url => (
        <li className="detailProduct" key={url}>
          <div className="detailImg">
            <img
              src={url}
              alt="나이키"
              className="shoesImg"
              onClick={openShoesModal}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DetailImgs;
