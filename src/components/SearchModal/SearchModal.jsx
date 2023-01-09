import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH_CONFIG } from '../../config';
// import { SEARCH_MODAL_DATA } from './SEARCH_MODAL_DATA';
import './SearchModal.scss';
import { useEffect } from 'react';

function SearchModal({ closeTargetModal }) {
  const [comment, setComment] = useState('');
  const [recentHistoryList, setRecentHistoryList] = useState([]);
  const [initialRecommendations, setInitialRecommendations] = useState([]);
  const [recommendationsForView, setRecommendationsForView] = useState([]);
  const [searchItemView, setSearchItemView] = useState([]);

  useEffect(() => {
    fetch('http://192.168.243.200:8000/products?offset=0&limit=19')
      .then(response => response.json())
      .then(result => setSearchItemView(result.list));
  }, []);

  useEffect(() => {
    setRecommendationsForView(searchItemView);
    setInitialRecommendations(searchItemView);
  }, [searchItemView]);

  useEffect(() => {
    const localStorageItem = localStorage.getItem('recentHistory');
    if (!localStorageItem) {
      return;
    }

    try {
      setRecentHistoryList(
        localStorageItem ? JSON.parse(localStorageItem) : []
      );
    } catch (e) {
      console.error(e);
      localStorage.setItem('recentHistory', '[]');
    }
  }, []);

  const inputComment = e => {
    const currentComment = e.target.value;
    const filteredRecommendations = initialRecommendations.filter(
      ({ productName }) => productName.toLowerCase().includes(currentComment)
    );

    setRecommendationsForView(filteredRecommendations);
    setComment(e.target.value);
  };

  const inputKeyUp = e => {
    if (e.key !== 'Enter') {
      return;
    }

    const inputComment = e.target.value;

    if (!inputComment.length) {
      return;
    }

    const localStorageItem = localStorage.getItem('recentHistory');
    try {
      const recentHistory = localStorageItem
        ? JSON.parse(localStorageItem)
        : [];

      const updated = [...recentHistory, inputComment];
      localStorage.setItem('recentHistory', JSON.stringify(updated));

      setRecentHistoryList(updated);
      setComment('');
    } catch (e) {
      console.error(e);
      localStorage.setItem('recentHistory', '[]');
    }
  };

  const handleRemoveHistory = historyComment => {
    const filtered = recentHistoryList.filter(
      recentHistory => recentHistory !== historyComment
    );

    localStorage.setItem('recentHistory', JSON.stringify(filtered));
    setRecentHistoryList(filtered);
  };

  const handleCloseModal = () => closeTargetModal('search');

  return (
    <div className="searchModal" onClick={() => handleCloseModal()}>
      <div className="searchModalContainer" onClick={e => e.stopPropagation()}>
        <div className="header">
          <div>
            <Link to="/" className="headerLeft">
              JUST-DO-IT
            </Link>
          </div>
          <div className="headerCenter">
            <i className="fa-solid fa-magnifying-glass headerCenterIcon" />
            <input
              type="text"
              placeholder="검색"
              className="headerCenterInput"
              value={comment}
              onChange={inputComment}
              onKeyPress={inputKeyUp}
            />
          </div>
          <div className="headerRight">
            <button className="delateModal" onClick={() => handleCloseModal()}>
              <i className="fa-solid fa-x headerRightIcon" />
            </button>
          </div>
        </div>
        <div className="recommendContainer">
          <p className="recommendTitle">최근 검색어</p>
          {recentHistoryList.map((value, idx) => {
            return (
              <div key={idx} className="recommend">
                <Link to="/item-list" className="recommendItem">
                  {value}
                </Link>
                <button
                  className="delateRecommend"
                  onClick={() => handleRemoveHistory(value)}
                >
                  <i className="fa-solid fa-x delateRecommendIcon" />
                </button>
              </div>
            );
          })}
        </div>
        {!!recommendationsForView.length ? (
          <div className="recommendationContainer">
            <p className="recommendationTitle">추천 검색어</p>
            {recommendationsForView.map(({ productName, id }) => {
              return (
                <div key={id} className="recommendationItem">
                  <Link to="/item-list" className="recommendationName">
                    {productName}
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SearchModal;
