import React, { useState } from 'react';

function SizeButton({ size, selectedSize, setSelectedSize }) {
  const [isChecked, setIsChecked] = useState(false);

  const sizeSelector = event => {
    const size = Number(event.target.title);
    let sizeArr = [...selectedSize];

    sizeArr.indexOf(size) === -1
      ? sizeArr.push(size)
      : (sizeArr = sizeArr.filter(element => element !== size));

    setIsChecked(prev => !prev);
    setSelectedSize(sizeArr);
  };
  return (
    <div
      className={`sizeNumber ${isChecked ? 'selected' : ''}`}
      onClick={sizeSelector}
      title={size}
    >
      <div title={size}>{size}</div>
    </div>
  );
}

export default SizeButton;
