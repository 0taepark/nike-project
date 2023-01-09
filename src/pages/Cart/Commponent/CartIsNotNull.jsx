import React from 'react';
import CartItem from './CartItem';
import CartAside from './CartAside';
import './CartIsNotNull.scss';

function CartIsNotNull({
  cartItems,
  setCartItems,
  pageReloader,
  setPageReloader,
}) {
  async function delCartItemAll(event) {
    fetch(`http://192.168.243.200:8000/carts`, {
      method: 'DELETE',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'All carts were deleted') {
          alert('전체제품이 삭제되었습니다.');
          event.nativeEvent.path[2].innerHTML = '';
        }
      });
  }
  return (
    <article className="cartWrapper">
      <section className="cartItemsListWrapper">
        <div className="cartItemsListHeader">
          <button className="cartDelItems" onClick={delCartItemAll}>
            전체삭제
          </button>
        </div>
        <ul className="cartItemsList">
          {cartItems &&
            cartItems.map(cartItems => (
              <CartItem
                key={cartItems.cartId}
                cartItems={cartItems}
                setCartItems={setCartItems}
                pageReloader={pageReloader}
                setPageReloader={setPageReloader}
              />
            ))}
        </ul>
      </section>
      <CartAside cartItems={cartItems} setCartItems={setCartItems} />
    </article>
  );
}

export default CartIsNotNull;
