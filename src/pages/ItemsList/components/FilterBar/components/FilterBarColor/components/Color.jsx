import React, { useState } from 'react';
import './color.scss';

function Color({ name, code, colorNumber, selectedColor, setSelectedColor }) {
  const [colorCheck, setColorCheck] = useState(false);

  const colorSelector = event => {
    const color = event.target.title;
    let colorArr = [...selectedColor];

    colorArr.indexOf(color) === -1
      ? colorArr.push(color)
      : (colorArr = colorArr.filter(element => element !== color));

    setColorCheck(prev => !prev);
    setSelectedColor(colorArr);
  };

  return (
    <div className="color">
      <div
        className="colorCircle"
        style={{ backgroundColor: `${code}` }}
        title={colorNumber}
        onClick={colorSelector}
      >
        {colorCheck && (
          <p className="colorCheck" title={colorNumber}>
            ✓
          </p>
        )}
      </div>
      <div className="colorName">{name}</div>
    </div>
  );
}

export default Color;
