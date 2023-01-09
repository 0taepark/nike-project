import React, { useState } from 'react';
import FilterBarCheckList from './components/FilterBarCheckList/FilterBarCheckList';
import FilterBarColor from './components/FilterBarColor/FilterBarColor';
import FilterBarSize from './components/FilterBarSize/FilterBarSize';

import FILTER_BAR_CHECKLIST from './components/FilterBarCheckList/constantData/filterBarItems';
import './filterBar.scss';

function FilterBar({
  filterHider,
  checkList,
  setCheckList,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) {
  return (
    <div
      className="filterBar"
      style={
        filterHider !== true
          ? {
              transition: '0.4s',
              transform: 'translateX(-110%)',
              overflow: 'hidden',
            }
          : null
      }
    >
      <FilterBarSize
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <FilterBarColor
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      {FILTER_BAR_CHECKLIST.map(list => {
        return (
          <FilterBarCheckList
            category={list.category}
            categoryCode={list.categoryCode}
            listArr={list.listArr}
            key={list.category}
            checkList={checkList}
            setCheckList={setCheckList}
          />
        );
      })}
    </div>
  );
}

export default FilterBar;
