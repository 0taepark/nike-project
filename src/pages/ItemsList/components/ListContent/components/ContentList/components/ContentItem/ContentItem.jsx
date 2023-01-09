import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContentItem({
  id,
  thumbnail,
  productName,
  description,
  brandName,
  color,
  discountPrice,
  retailPrice,
}) {
  const navigate = useNavigate();

  const goToItemDetail = () => {
    navigate(`/item-detail/${id}`);
  };

  return (
    <div className="contentItem" key={id}>
      <div
        className="itemImg"
        style={{ backgroundColor: `white` }}
        onClick={goToItemDetail}
      >
        <div className="itemDecription">
          <p>{description}</p>
        </div>
        <img src={thumbnail} alt={productName} />
      </div>
      <div className="itemDetails">
        <div className="itemDetailLeft">
          <div className="productName detail">{productName}</div>
          <div className="brandName detail">{brandName}</div>
          <div className="color detail">{color}</div>
        </div>
        <div className="itemDetailRight">
          {discountPrice !== null ? (
            <>
              <div className="discountRatio detail">
                {Math.floor(
                  (1 - Number(discountPrice) / Number(retailPrice)) * 100
                )}
                %
              </div>
              <div className="price detail">
                <div className="discountPrice detail">
                  {Number(discountPrice).toLocaleString()}원
                </div>
                <div className="retailPrice detail">
                  {Number(retailPrice).toLocaleString()}원
                </div>
              </div>
            </>
          ) : (
            <div className="price detail">
              <div className="discountPrice detail">
                {Number(retailPrice).toLocaleString()}원
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
