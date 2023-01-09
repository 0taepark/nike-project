import React from 'react';
import './CartAside.scss';

function CartAside({ cartItems, setCartItems }) {
  const accessToken = localStorage.getItem('token');

  const cartOrder = () => {
    fetch('http://192.168.243.200:8000/orders/carts', {
      method: 'POST',
      headers: {
        authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartItems(data);
        alert('주문이 완료되었습니다. 이승훈 존잘');
      });
  };

  const sumCartRetailPrice = cartItems.reduce((sum, num) => {
    return (sum += num.quantity * Number(num.retailPrice));
  }, 0);

  const calCartDiscountedPrice = cartItems.reduce((sum, num) => {
    return num.discountPrice !== null
      ? sum + num.quantity * Number(num.retailPrice - num.discountPrice)
      : sum;
  }, 0);

  return (
    <aside className="cartAside">
      <section className="cartCheckoutWrapper">
        <div className="checkoutTitle">주문예정금액</div>
        <div className="checkoutDetail">
          <div className="checkoutPrice detail">
            <span>상품금액</span>
            <span>{sumCartRetailPrice.toLocaleString()}원</span>
          </div>
          <div className="detail">
            <span>예상배송비</span>
            <span>0원</span>
          </div>
          <div className="detail">
            <span>상품 할인 금액</span>
            <span className="cartPrice">
              {calCartDiscountedPrice
                ? calCartDiscountedPrice.toLocaleString()
                : 0}
              원
            </span>
          </div>
          <div className="checkoutDiscountedPrice detail">
            <span>주문 할인 금액</span>
            <span className="cartPrice">0원</span>
          </div>
          <div className="totalPrice detail">
            <span>총 결제 예정 금액</span>
            <span className="cartPrice">
              {(sumCartRetailPrice - calCartDiscountedPrice).toLocaleString()}원
            </span>
          </div>
          <button className="checkoutOrderBtn" onClick={cartOrder}>
            주문하기
          </button>
        </div>
      </section>
      <div className="coupon">
        <form className="inputCoupon">
          <input
            className="couponCode"
            name="couponCode"
            type="text"
            placeholder="프로모션 코드 입력"
          />
          <button className="couponBtn">적용</button>
        </form>
      </div>
    </aside>
  );
}

export default CartAside;
