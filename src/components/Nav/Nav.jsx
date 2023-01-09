import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../Login/LoginModal';
import SearchModal from '../SearchModal/SearchModal';
import ViewItemModal from '../ViewItem/ViewItemModal';
import ModalPortal from '../../ModalPortal';

import './Nav.scss';

function Nav() {
  const [modalState, setModalState] = useState({
    login: false,
    search: false,
    viewItem: false,
  });
  const [fullName, setFullName] = useState(null);
  const [token, setToken] = useState(null);

  const showTargetModal = modalName => {
    if (!['login', 'search', 'viewItem'].includes(modalName)) {
      return;
    }

    setModalState(prev => ({
      ...prev,
      [modalName]: true,
    }));
  };

  const closeTargetModal = modalName => {
    if (!['login', 'search', 'viewItem'].includes(modalName)) {
      return;
    }

    setModalState(prev => ({
      ...prev,
      [modalName]: false,
    }));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fullName = localStorage.getItem('fullName');

    if (token && fullName) {
      setToken(token);
      setFullName(fullName);
    }
  }, [localStorage.getItem('token')]);

  const handleLogout = () => {
    alert('로그아웃');
    localStorage.clear();
    setToken(null);
    setFullName(null);
  };

  return (
    <>
      <div className="navTop">
        <Link to="/" className="navTopLeft" />
        <div className="navTopRight">
          <Link to="/item-list" className="navTopRightItem">
            고객센터
          </Link>
          {token && fullName ? (
            <>
              <p className="navTopRightItem">{fullName}</p> |
              <button className="navTopRightItem" onClick={handleLogout}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/sign-up" className="navTopRightItem">
                멤버 가입
              </Link>
              <button
                className="navTopRightItem"
                onClick={() => showTargetModal('login')}
              >
                로그인
              </button>
            </>
          )}
        </div>
      </div>
      <div className="navBottom">
        <div className="navBottomLeft">
          <Link to="/" className="navBottomLeftItem">
            JUST-DO-IT
          </Link>
        </div>
        <div
          className="navBottomCenter"
          onMouseEnter={() => showTargetModal('viewItem')}
        >
          <Link to="/item-list" className="navBottomCenterItem">
            New Releases
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Men
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Women
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Kids
          </Link>
          <Link to="/item-list" className="navBottomCenterItem">
            Sale
          </Link>
        </div>
        <div className="navBottomRight">
          <div className="navBottomRightSearch">
            <i className="fa-solid fa-magnifying-glass navBottomRightSearchIcon" />
          </div>
          <div className="navBottomRightInput">
            <input
              onClick={() => showTargetModal('search')}
              type="text"
              placeholder="검색"
              className="navBottomRightInputBar"
            />
          </div>
          <div className="navBottomRightIcon">
            <Link to="/wish-list">
              <i className="fa-regular fa-heart navBottomRightItem" />
            </Link>
            <Link to="/cart">
              <i className="fa-solid fa-bag-shopping navBottomRightItem" />
            </Link>
          </div>
        </div>
      </div>
      {modalState.login && (
        <ModalPortal>
          <LoginModal closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}
      {modalState.search && (
        <ModalPortal>
          <SearchModal closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}
      {modalState.viewItem && (
        <ModalPortal>
          <ViewItemModal closeTargetModal={closeTargetModal} />
        </ModalPortal>
      )}
    </>
  );
}

export default Nav;
