import React, { useEffect, useState } from 'react';
import './OptModal.scss';

function OptModal({
  setIsOpenModal,
  optItemInfo,
  cartOptItems,
  cartDiscountRate,
  pageReloader,
  setPageReloader,
  itemInfoGetter,
}) {
  const { retailPrice, discountPrice, quantity, productName, size, cartId } =
    optItemInfo[0];
  const { productOptions } = cartOptItems;
  const [selectedSize, setSeletedSize] = useState(size);
  const [optCount, setOptCount] = useState(Number(quantity));
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [plusDisabled, setplusDisabled] = useState(false);

  let selctedOptId = 0;

  productOptions &&
    productOptions.map(option => {
      if (option.size === selectedSize) {
        selctedOptId = option.productOptionId;
      }
    });
  const changeCartItemInfo = () => {
    fetch(`http://192.168.243.200:8000/carts/${cartId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productOptionId: selctedOptId,
        quantity: optCount,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Cart was updated') {
          alert('제품이 장바구니에서 잘 변경되었습니다');
          changeOpt();
          setPageReloader(prev => !prev);
        }
        if (result.message === 'OUT_OF_STOCK') {
          alert('품절된 상품입니다');
        } else if (result.message === 'REQUEST_QUANTITY_MORE_THAN_STOCK') {
          alert('너무 많은 수량을 주문하였습니다');
        } else if (result.message === 'WRONG_INPUT_REQUEST')
          alert('잘못된 요청이 들어왔습니다');
      });
  };

  useEffect(() => {
    setMinusDisabled(optCount < 1);
    setplusDisabled(optCount >= 10);
  }, [optCount]);

  const changedSize = e => {
    setSeletedSize(e.target.title);
  };

  const handleOptInputCount = e => {
    e.preventDefault();
    const toNum = Number(e.target.value);
    if (Number.isNaN(toNum)) return;
    setOptCount(toNum);
  };

  const handleOptPulsBtn = () => {
    setOptCount(prev => prev + 1);
  };

  const handleOptMinusBtn = () => {
    setOptCount(prev => prev - 1);
  };

  const changeOpt = e => {
    setIsOpenModal(prev => !prev);
  };

  return (
    <div className="optContainer">
      <section className="optImgsContainer">
        {cartOptItems &&
          cartOptItems.images.map((images, idx) => {
            return <img key={idx} className="optImg" alt="신발" src={images} />;
          })}
      </section>
      <article className="optRight">
        <div className="optRightHeder">
          <span className="optItem">{cartOptItems.brandName}</span>
          <span className="optPrice">
            <p
              className={
                Number(discountPrice) !== 0
                  ? 'cartRetailPrice'
                  : 'cartPriceNone'
              }
            >
              {Number(discountPrice).toLocaleString()}원
            </p>
            <p
              className={
                Number(discountPrice) === 0 ? 'cartRetailPrice' : 'beforePrice'
              }
            >
              {Number(retailPrice).toLocaleString()}원
            </p>
          </span>
        </div>
        <div className="optItemTitle">
          <div className="optItemName">{productName}</div>
          <div
            className={
              cartDiscountRate < 100 ? 'optDiscountRate' : 'optDiscountNone'
            }
          >
            {cartDiscountRate}%
          </div>
        </div>
        <div>
          <div className="optSeletSize">사이즈</div>
          <div className="optSizeContainer">
            {cartOptItems &&
              cartOptItems.productOptions.map(opt => {
                return (
                  <button
                    title={opt.size}
                    onClick={changedSize}
                    key={opt.productOptionId}
                    className={`${
                      opt.stock === 0 ? 'nullStock' : 'optSizeValue'
                    } ${opt.size === selectedSize ? 'selectedValue' : null}`}
                    disabled={opt.stock === 0}
                  >
                    {opt.size}
                  </button>
                );
              })}
          </div>
        </div>
        <div className="optChangeCount">
          <label className="optCountLabel">수량</label>
          <input
            className="itemCount"
            type="text"
            name="itemCount"
            value={optCount}
            onChange={handleOptInputCount}
          />
          <button
            className="cartCountDown"
            disabled={minusDisabled}
            onClick={handleOptMinusBtn}
          >
            <i className="fa-solid fa-minus" />
          </button>
          <button
            className="cartCountUp"
            disabled={plusDisabled}
            onClick={handleOptPulsBtn}
          >
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <div className={!plusDisabled ? 'plusDisabled' : 'plusAbled'}>
          최대 구매 가능 수량은 10개까지 입니다
        </div>
        <button
          className="optChangeBtn"
          onClick={changeOpt}
          onClick={changeCartItemInfo}
        >
          옵션변경하기
        </button>
        <div className="optShipInfo">
          <i className="fa-solid fa-truck" />
          <span>오늘도착</span>
          <div>오후 1시까지 구매하시면, 오늘 도착합니다.</div>
        </div>
      </article>
    </div>
  );
}

export default OptModal;
