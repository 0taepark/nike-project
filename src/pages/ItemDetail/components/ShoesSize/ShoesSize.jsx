import React from 'react';
import SizeButton from './components/SizeButton';
import './ShoesSize.scss';

function ShoesSize({
  footSize,
  setShooseSize,
  setSelectedId,
  setProductOptionId,
  product,
}) {
  return (
    <div className="shoesSize">
      <ul className="shoesSizeWrap">
        {footSize?.map(data => (
          <SizeButton
            data={data}
            key={data.productOptionId}
            setShooseSize={setShooseSize}
            itemstock={data.stock}
            setSelectedId={setSelectedId}
            setProductOptionId={setProductOptionId}
            product={product}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoesSize;
