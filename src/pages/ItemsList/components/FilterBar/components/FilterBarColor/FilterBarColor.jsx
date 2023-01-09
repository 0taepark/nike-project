import React, { useState } from 'react';
import Color from './components/Color';

import COLORS from './constantData/colorsForFilter';

import './filterBarColor.scss';

function FilterBarColor({ selectedColor, setSelectedColor }) {
  const [isHide, setIsHide] = useState(false);

  const hideController = () => {
    setIsHide(prev => !prev);
  };

  return (
    <div className="filterBarColor">
      <div className="colorHeader">
        <div className="colorText">색상</div>
        {isHide === false ? (
          <img
            className="colorIcon"
            src="./image/itemList/upArrow.png"
            alt="숨기기"
            onClick={hideController}
          />
        ) : (
          <img
            className="colorIcon"
            src="./image/itemList/downArrow.png"
            alt="숨기기"
            onClick={hideController}
          />
        )}
      </div>
      <div
        className="colors"
        style={isHide === false ? null : { display: 'none' }}
      >
        {COLORS.map(color => {
          return (
            <Color
              name={color.name}
              key={color.code}
              code={color.code}
              colorNumber={color.colorNumber}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterBarColor;
