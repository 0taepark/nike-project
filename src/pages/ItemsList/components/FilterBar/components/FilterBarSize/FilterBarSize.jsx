import React, { useState } from 'react';
import SIZES from './constantData/sizes';
import './filterBarSize.scss';
import SizeButton from './SizeButton';

function FilterBarSize({ selectedSize, setSelectedSize }) {
  const [isHide, setIsHide] = useState(false);

  const hideController = () => {
    setIsHide(prev => !prev);
  };

  return (
    <div className="filterSize">
      <div className="sizeHeader">
        <div className="sizeText">신발 사이즈</div>
        {isHide === false ? (
          <img
            className="sizeIcon"
            src="./image/itemList/upArrow.png"
            alt="숨기기"
            onClick={hideController}
          />
        ) : (
          <img
            className="sizeIcon"
            src="./image/itemList/downArrow.png"
            alt="숨기기"
            onClick={hideController}
          />
        )}
      </div>
      <div
        className="sizeNumbers"
        style={isHide === false ? null : { display: 'none' }}
      >
        {SIZES.map(size => {
          return (
            <SizeButton
              key={size}
              size={size}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterBarSize;
