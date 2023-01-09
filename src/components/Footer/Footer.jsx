import React from 'react';
import { Link } from 'react-router-dom';
import { TOP_DATA, TOP_ITEM_DATA } from './FOOTER_DATA';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          {TOP_DATA.map(({ topKey, name }) => {
            return (
              <Link
                key={topKey}
                to="/item-list"
                className="categoryText
              "
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="topItem">
          {TOP_ITEM_DATA.map(({ topItemKey, name }) => {
            return (
              <Link key={topItemKey} to="/item-list" className="defaultText">
                {name}
              </Link>
            );
          })}
        </div>
        <div>
          <Link
            to="/item-list"
            className="categoryText
          "
          >
            ABOUT NIKE
          </Link>
          <Link to="/item-list" className="defaultText">
            나이키에 대하여
          </Link>
        </div>
        <div>
          <Link
            to="/item-list"
            className="categoryText
          "
          >
            SOCIAL
          </Link>
          <div className="topIconBox">
            <a href="https://twitter.com/nike">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="https://ko-kr.facebook.com/nike/">
              <i className="fa-brands fa-square-facebook" />
            </a>
            <a href="https://www.youtube.com/user/koreanike/videos?app=desktop">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="https://www.instagram.com/nike/">
              <i className="fa-brands fa-square-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="centerBox">
          <Link
            to="item-list"
            className="categoryText
          "
          >
            대한민국
          </Link>
          <p className="defaultText">ⓒ 2022 Nike, Inc. All Rights Reserved</p>
        </div>
        <div className="centerBox">
          <p className="defaultText">이용약관</p>
          <p className="defaultText">개인정보처리방침</p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomBox">
          <p className="bottomDefaultText">
            (유)나이키코리아 대표 : Kimberlee Lynn Chang Mendes, 킴벌리 린 창
            멘데스 | 서울 강남구 테헤란로 152 강남파이낸스센터 30층
          </p>
          <p className="bottomDefaultText">
            통신판매업신고번호 : 2011-서울강남-03461 | 등록번호 : 220-88-09068
            <Link
              to="/item-list"
              className="bottomCategoryText"
              href="www.naver.com"
            >
              사업자정보확인
            </Link>
          </p>
          <p className="bottomDefaultText">
            고객센터 전화문의
            <a className="bottomCategoryText" href="tel:080-022-0182">
              080-022-0182
            </a>
          </p>
          <p className="bottomDefaultText">
            FAX: 02-6744-5880 | E-mail : asdf@asdf.com | 호스팅서비스사업자:
            (유)나이키코리아
          </p>
        </div>
        <div className="bottomBox">
          <p className="bottomDefaultText">
            안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 KG
            이니시스의 구매안전 서비스 (채무지급보증)을 이용하실 수 있습니다.
          </p>
          <p className="bottomDefaultText">
            온라인디지털콘텐츠사업발전법에 의한
            <Link to="/item-list" className="bottomCategoryText textUnderBar">
              콘텐츠보호안내 자세히 보기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
