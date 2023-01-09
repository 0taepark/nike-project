import React from 'react';
import { Link } from 'react-router-dom';

import {
  NEW_FEATURED_DATA,
  SHOES_DATA,
  CLOTHES_DATA,
  SPORTS_DATA,
  BRAND_DATA,
} from './VIEW_ITEM_DATA';
import './ViewItemModal.scss';

function ViewItem({ closeTargetModal }) {
  const handleMouseLeave = () => closeTargetModal('viewItem');
  return (
    <div className="viewItemWrapper" onMouseLeave={handleMouseLeave}>
      <div className="viewItem">
        <div>
          {NEW_FEATURED_DATA.map(({ featuredKey, name }) => {
            return (
              <Link
                key={featuredKey}
                className="defaultText"
                to="/item-list"
                onClick={handleMouseLeave}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div>
          {SHOES_DATA.map(({ shoesKey, name }) => {
            return (
              <Link
                key={shoesKey}
                className="defaultText"
                to="/item-list"
                onClick={handleMouseLeave}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="clothesBox">
          {CLOTHES_DATA.map(({ clothesKey, name }) => {
            return (
              <Link
                key={clothesKey}
                className="defaultText"
                to="/item-list"
                onClick={handleMouseLeave}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div>
          {SPORTS_DATA.map(({ sportsKey, name }) => {
            return (
              <Link
                key={sportsKey}
                className="defaultText"
                to="/item-list"
                onClick={handleMouseLeave}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div>
          {BRAND_DATA.map(({ brandKey, name }) => {
            return (
              <Link
                key={brandKey}
                className="defaultText"
                to="/item-list"
                onClick={handleMouseLeave}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
