import React, { useRef, useState } from 'react';
import './contentNext.scss';

function ContentNext({ products, setOffset, setLimit }) {
  const offset = products.length !== undefined ? products.length : 0;
  const nextItemGetter = () => {
    setOffset(0);
    setLimit(offset + 6);
  };
  return (
    <button className="contentNext" onClick={nextItemGetter}>
      <div className="text">더 보기</div>
    </button>
  );
}

export default ContentNext;
