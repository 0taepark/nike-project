import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Modal.scss';
import ModalContentBox from './ModalContentBox/ModalContentBox';
function Modal({
  closeModal,
  modal,

  quantity,
}) {
  let totalPrice = 0;
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('token');
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.243.200:8000/carts`, {
      method: 'GET',
      headers: {
        authorization: accessToken,
      },
    })
      .then(response => response.json())
      .then(data => setResult(data.result));
    // .then(result => console.log('cart result : ', result));
  }, [result]);

  for (let i = 0; i < result.length; i++) {
    if (result[i].discountPrice) {
      totalPrice += result[i].discountPrice * result[i].quantity;
    } else {
      totalPrice += result[i].retailPrice * result[i].quantity;
    }
  }
  let key = 0;

  return (
    <div>
      <div className="modal">
        <div onClick={closeModal} className="overlay" />

        <div className="modalContent">
          <div className="modalWrapper">
            <h2 className="modalSmallBasket">미니 장바구니</h2>
            <div className="modalMap">
              {result.map(cartItem => {
                key = key + 1;
                return (
                  <ModalContentBox
                    cartId={cartItem.cartId}
                    key={key}
                    product={cartItem.productName}
                    getThumbnail={cartItem.thumbnail}
                    shooseSize={cartItem.size}
                    quantity={cartItem.quantity}
                    retailPrice={cartItem.retailPrice}
                    styleCode={cartItem.styleCode}
                    discountPrice={cartItem.discountPrice}
                  />
                );
              })}
            </div>

            <div className="modalPurchase">
              <div className="modalPrice">
                <div className="modaItemPrice">총 상품금액</div>
                <div className="modalShoesPrice">
                  {totalPrice.toLocaleString()}원
                </div>
              </div>
              <div className="modaItemPrice">
                배송비는 주문서에서 확인이 가능합니다.
              </div>
              <div className="modalBasketBuy">
                <button className="modalBasket">
                  <Link to="/cart">장바구니 가기</Link>
                </button>
                <button className="modalBuy">바로 구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
