import React, { useState } from 'react';
import './filterBarCheckList.scss';

function FilterBarCheckList({
  category,
  categoryCode,
  listArr,
  checkList,
  setCheckList,
}) {
  const [isHide, setIsHide] = useState(false);

  const hideController = () => {
    setIsHide(prev => !prev);
  };

  const checkListManager = event => {
    const selectedCheckList = event.nativeEvent.path[2].elements;
    const arrayForSubmit = [];
    for (let i = 0; i < selectedCheckList.length; i++) {
      if (selectedCheckList[i].checked === true) arrayForSubmit.push(i + 1);
    }

    checkList[categoryCode] = arrayForSubmit;
    setCheckList({ ...checkList });
  };

  return (
    <div className="category">
      <div className="categoryHeader">
        <div className="categoryText">{category}</div>
        {isHide === false ? (
          <img
            className="categoryIcon"
            src="./image/itemList/upArrow.png"
            alt="메뉴펼치기"
            onClick={hideController}
          />
        ) : (
          <img
            className="categoryIcon"
            src="./image/itemList/downArrow.png"
            alt="메뉴펼치기"
            onClick={hideController}
          />
        )}
      </div>
      <form
        className="checkList"
        style={isHide === false ? null : { display: 'none' }}
      >
        {listArr.map(list => {
          return (
            <div className="list" key={list}>
              <input
                type="checkbox"
                id={list}
                name={list}
                onClick={checkListManager}
              />
              <label htmlFor={list}>{list}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default FilterBarCheckList;
