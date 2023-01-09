import React, { useEffect, useState } from 'react';
import OptModal from './OptModal';
import { useNavigate } from 'react-router-dom';
import './CartItem.scss';

function CartItem({ cartItems, setCartItems, pageReloader, setPageReloader }) {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [optItemInfo, setOptItemInfo] = useState('');
  const [cartOptItems, setCartOptItems] = useState('');

  const accessToken = localStorage.getItem('token');

  const {
    productId,
    discountPrice,
    cartId,
    thumbnail,
    quantity,
    productName,
    size,
    retailPrice,
    styleCode,
  } = cartItems;

  const itemInfoGetter = () => {
    setIsOpenModal(prev => !prev);
    getSeletedCartId(cartId);
    fetch(`http://192.168.243.200:8000/carts/${cartId}`, {
      headers: {
        authorization: accessToken,
      },
    })
      .then(res => {
        if (res.ok === true) {
          return res.json();
        }
        throw new Error('에러가 발생했습니다');
      })
      .catch(error => console.log(error))
      .then(data => setCartOptItems(data));
  };

  async function delCartItem(event) {
    fetch(`http://192.168.243.200:8000/carts/${cartId}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Cart was deleted') {
          alert('선택하신 제품이 삭제되었습니다. ');
          event.nativeEvent.path[2].innerHTML = '';
        }
      });
  }

  const postWish = event => {
    fetch(`http://192.168.243.200:8000/wishlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
      body: JSON.stringify({
        productId: productId,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'ALREADY_EXIST'
          ? alert('이미 wishList에 있는 항목입니다.')
          : alert('wishList에 ZZIM')
      );
  };

  let cartDiscountRate = Math.ceil(
    (1 - Number(discountPrice) / Number(retailPrice)) * 100
  );
  const getSeletedCartId = id => {
    const optInfo = [cartItems].filter(cartItem => cartItem.cartId === id);
    setOptItemInfo(optInfo);
  };

  const toDetailPage = () => {
    navigate(`/item-detail/${productId}`, {
      state: {
        productId: productId,
      },
    });
  };
  return (
    <li className="cartItem" id={cartId}>
      <img
        className="cartItemImg"
        alt="제품"
        src={thumbnail}
        id={productId}
        onClick={() => toDetailPage(productId)}
      />
      <div className="cartItemInfo">
        <h6 className="cartItemTitle">{productName}</h6>
        <p className="cartItemDes">스타일 : {styleCode}</p>
        <p className="cartItemDes">사이즈 : {size}</p>
        <p className="cartItemDes">수량 : {quantity}</p>
      </div>
      <div>
        <button className="cartOptChange" onClick={itemInfoGetter}>
          옵션 변경
        </button>
      </div>
      <span
        className={cartDiscountRate < 100 ? 'cartDiscountRate' : 'discountNone'}
      >
        {cartDiscountRate}%
      </span>
      <div className="cartItemPrice">
        <span
          className={
            Number(discountPrice) === 0 ? 'cartRetailPrice' : 'beforePrice'
          }
        >
          {Number(retailPrice).toLocaleString()}
        </span>
        <p
          className={
            Number(discountPrice) !== 0 ? 'cartRetailPrice' : 'cartPriceNone'
          }
        >
          {Number(discountPrice).toLocaleString()}
        </p>
      </div>
      <button className="cartDelItem" onClick={delCartItem}>
        <i className="fa-regular fa-trash-can del " />
      </button>
      <button className="addWishBtn" onClick={postWish}>
        위시리스트에 추가
      </button>
      {isOpenModal && (
        <>
          <div className="optOverlay" onClick={() => setIsOpenModal(false)} />
          <OptModal
            setIsOpenModal={setIsOpenModal}
            productId={productId}
            optItemInfo={optItemInfo}
            cartOptItems={cartOptItems}
            setCartItems={setCartItems}
            cartDiscountRate={cartDiscountRate}
            pageReloader={pageReloader}
            setPageReloader={setPageReloader}
            itemInfoGetter={itemInfoGetter}
          />
        </>
      )}
    </li>
  );
}

export default CartItem;
