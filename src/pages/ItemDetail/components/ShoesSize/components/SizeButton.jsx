import React, { useState } from 'react';
import './SizeButton.scss';
function SizeButton({
  data,
  setShooseSize,
  itemstock,
  setSelectedId,
  setProductOptionId,
  product,
}) {
  const { size } = data;
  const [button, setButton] = useState(false);

  const pushButton = e => {
    setShooseSize(e.target.id);
    setButton(!button);
    setSelectedId(e.target.value);
    product.productOptions.map(item => {
      if (Number(item.size) === Number(e.target.id)) {
        setProductOptionId(item.productOptionId);
      }
    });
  };

  return (
    <li>
      <input
        name="shoesSize"
        type="radio"
        className="sizeButton"
        onClick={pushButton}
        id={size}
        disabled={itemstock === 0}
        value={data.productOptionId}
      />
      <label htmlFor={size}>{data.size}</label>
    </li>
  );
}

export default SizeButton;
