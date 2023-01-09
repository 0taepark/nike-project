import React, { useEffect, useState } from 'react';
import CartIsNull from './Commponent/CartIsNull';
import CartIsNotNull from './Commponent/CartIsNotNull';
import './Cart.scss';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [pageReloader, setPageReloader] = useState(false);

  //통신용
  useEffect(() => {
    fetch('http://192.168.243.200:8000/carts', {
      mehtod: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러발생');
      })
      .catch(error => console.log(error))
      .then(data => setCartItems(data.result));
  }, [pageReloader]);

  return (
    <div className="cart">
      <div className="cartHeader">
        <h2 className="cartTitle">장바구니</h2>
        <p className="cartItemsCount">
          <span>{cartItems.length}</span>개 상품
        </p>
      </div>
      {cartItems[0]?.cartId ? (
        <CartIsNotNull
          cartItems={cartItems}
          setCartItems={setCartItems}
          pageReloader={pageReloader}
          setPageReloader={setPageReloader}
        />
      ) : (
        <CartIsNull />
      )}
    </div>
  );
}

export default Cart;
