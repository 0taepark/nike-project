import React, { useState } from 'react';
import ModalForItemList from './components/Modal/ModalForItemList';
import ModarlPortalForItemList from './components/Modal/PortalForItemList';
import './listHeader.scss';

function ListHeader({
  filterHider,
  setFilterHider,
  sortStandard,
  setSortStandard,
  products,
}) {
  const [sortSetter, setSortSetter] = useState(false);

  const filterController = () => {
    setFilterHider(prev => !prev);
  };

  const sortController = event => {
    const newStandard = event.target.innerText;
    setSortSetter(prev => !prev);

    if (event.target.className === 'sortStandard') setSortStandard(newStandard);
  };

  return (
    <header className="listHeader">
      <div className="headerLeft">
        Nike's Wecode Edition ({products.length})
      </div>
      <div className="headerRight">
        <div className="headerFilter" onClick={filterController}>
          <div className="text">필터</div>
          <img
            src={`./image/itemList/filter${
              filterHider === false ? 'white' : 'black'
            }.png`}
            alt="필터 가리기"
          />
          {/* 3항연산자로 부르는 이미지만 왔다갔다하게해주기 위아래 전부 */}
        </div>
        <div className="headerSetOrder" onClick={sortController}>
          <div className="text">{sortStandard}</div>
          <img
            src={`./image/itemList/${
              sortSetter === false ? 'down' : 'up'
            }Arrow.png`}
            alt="정렬목록 펼치기"
          />
          {sortSetter && (
            <ModarlPortalForItemList>
              <ModalForItemList />
            </ModarlPortalForItemList>
          )}
        </div>
      </div>
    </header>
  );
}

export default ListHeader;
