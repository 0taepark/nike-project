import React from 'react';
import './ModalForItemList.scss';

function ModalForItemList(props) {
  return (
    <div className="modalForItemList">
      <div className="modalContent">
        <ul className="modalList">
          <li className="sortStandard">신상품순</li>
          <li className="sortStandard">판매순</li>
          <li className="sortStandard">리뷰 많은 순</li>
          <li className="sortStandard">할인순</li>
          <li className="sortStandard">높은 가격순</li>
          <li className="sortStandard">낮은 가격순</li>
        </ul>
      </div>
    </div>
  );
}

export default ModalForItemList;
