import React from 'react';
import './Review.scss';

function Review({ review, styleCode }) {
  return (
    <div>
      <div className="reviewRatioWrap">
        <div className="reviewTop">폭(발볼)</div>
        <div className="reviewRatio">
          <div className="reviewPointFirst" />
        </div>
        <div className="reviewDetailRatio">
          <div>좁은</div>
          <div>큰</div>
        </div>
      </div>
      <div className="reviewRatioWrap">
        <div className="reviewTop">편안함</div>
        <div className="reviewRatio">
          <div className="reviewPointSecond" />
        </div>
        <div className="reviewDetailRatio">
          <div>편하지 않은</div>
          <div>매우 편안한</div>
        </div>
      </div>
      <div className="reviewRatioWrap">
        <div className="reviewTop">컬러</div>
        <div className="reviewRatio">
          <div className="reviewPointThird" />
        </div>
        <div className="reviewDetailRatio">
          <div>화면보다 밝은</div>
          <div>화면보다 어두운</div>
        </div>
      </div>
      <div className="reviewRatioWrap">
        <div className="reviewTop">사이즈</div>
        <div className="reviewRatio">
          <div className="reviewPointFourth" />
        </div>
        <div className="reviewDetailRatio">
          <div>작은</div>
          <div>큰</div>
        </div>
      </div>
      {review?.map((item, i) => (
        <div key={i} className="reviewWrap">
          <div>
            {'★'.repeat(item.starScore)}
            {'☆'.repeat(5 - item.starScore)}
          </div>
          <div className="reviewBox">
            <div>{item.fullName}</div>
            <div>{item.createdAt}</div>
            <div>{styleCode}</div>
          </div>
          <div className="reviewContent">{item.content}</div>
          <div />
        </div>
      ))}
    </div>
  );
}

export default Review;
