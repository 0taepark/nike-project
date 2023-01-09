import React from 'react';
import HEADER_ITEMS from './mockData/headerItems';
import './contentHeader.scss';

function ContentHeader(props) {
  return (
    <div className="contentHeader">
      <div className="contentHeaderContainer">
        {HEADER_ITEMS.map(item => {
          return (
            <div className="headerContent" key={item}>
              <div className="textContainer">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContentHeader;
