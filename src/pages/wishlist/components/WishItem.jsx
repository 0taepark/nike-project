import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { WISH_DATA } from '../../../config';

function WishItem({ productId, thumbnail, name, price, userId }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const moveItemDetail = () => {
    navigate(`/item-detail/${productId}`, { state: { productId: productId } });
  };
  const handleDeleteCheck = async event => {
    try {
      if (window.confirm('삭제 하시겠습니까?')) {
        await fetch(`http://192.168.243.200:8000/wishlist/${productId}`, {
          method: 'DELETE',
          headers: {
            authorization: token,
          },
        })
          .then(response => response.json())
          .then(result => {
            if (result.message === 'delete complete') {
              event.nativeEvent.path[2].innerHTML = '';
            }
          });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div key={productId} className="wishItem">
      <button
        className="deleteButton"
        onClick={handleDeleteCheck}
        title={productId}
      >
        <i className="fa-solid fa-x deleteIcon" />
      </button>
      <div className="wishItemBox">
        <img
          src={thumbnail}
          alt="위시리스트사진"
          className="wishImg"
          onClick={moveItemDetail}
        />
        <p className="wishName">{name}</p>
        <p className="wishPrice">{Number(price).toLocaleString()}원</p>
        <p onClick={moveItemDetail} className="wishMove">
          상세페이지로 이동
        </p>
      </div>
    </div>
  );
}

export default WishItem;
