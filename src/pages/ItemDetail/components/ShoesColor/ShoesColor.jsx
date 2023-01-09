import React from 'react';

function ShoesColor({ getThumbnail }) {
  return (
    <ul className="shoesColor">
      {getThumbnail?.map(e => (
        <li className="shoesColor" key={e.id}>
          <button>
            <img src={e.thumbnail} alt="나이키" className="shoesColorImg" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShoesColor;
