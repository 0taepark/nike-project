import React from 'react';
import './ModalContentBox.scss';

function ModalContentBox({
  cartId,
  product,
  getThumbnail,
  shooseSize,
  quantity,
  retailPrice,
  styleCode,
  discountPrice,
}) {
  const deleteShoesItem = event => {
    event.nativeEvent.path[5].innerHTML = '';
    const deleteCartId = event.target.title;
    fetch(`http://192.168.243.200:8000/carts/${cartId}`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  return (
    <div>
      <ul className="modalContentBox">
        <div>
          <img src={getThumbnail} className="modalImg" alt="나이키" />
        </div>
        <div className="modalInfo">
          <div className="modal">
            <p className="productName">{product}</p>
            <button>
              <img
                src="/image/x.png"
                className="modalDelete"
                alt="삭제"
                title={cartId}
                onClick={deleteShoesItem}
              />
            </button>
          </div>
          <div>스타일 : {styleCode}</div>
          <div>사이즈 : {shooseSize}</div>
          <div>수량: {quantity}</div>
          <div
            className={`modalDetailName ${
              discountPrice === null ? 'price0' : ''
            }`}
          >
            <div>
              <div className="retailPriceBox">
                {Number(retailPrice).toLocaleString()}원
              </div>
              <div className="modalDiscountRatio">
                {Math.floor(
                  (1 - Number(discountPrice) / Number(retailPrice)) * 100
                )}
                % off
              </div>
            </div>
            <div className="modalDiscountPrice">
              {' '}
              {Number(discountPrice).toLocaleString()}원
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default ModalContentBox;
