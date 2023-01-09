import React, { useState } from 'react';
import { LOGIN_CONFIG } from '../../config';
import { Link } from 'react-router-dom';
import './LoginModal.scss';

function Login({ closeTargetModal }) {
  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
  });

  const handleChangeInputs = ({ target: { name, value } }) =>
    setInputs(prev => ({ ...prev, [name]: value }));

  const validateLogin = ({ userName, password }) => {
    if (userName.length === 0 && password.length === 0) {
      throw new Error('아이디 혹은 비밀번호를 입력해주세요. ');
    }
  };

  const handleClickLogin = value => {
    try {
      validateLogin(value);

      fetch(`http://192.168.243.200:8000/users/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(value),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem('fullName', data.fullName);

          alert('로그인 성공');
          handleCloseModal();
        })
        .catch(e => console.error(e));
    } catch (e) {
      alert(e);
    }
  };

  const handleCloseModal = () => closeTargetModal('login');

  return (
    <div className="loginWrapper" onClick={handleCloseModal}>
      <div
        className="login"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div>
          <button className="loginModalDelete" onClick={handleCloseModal}>
            <i className="fa-solid fa-x" />
          </button>
          <p className="loginIcon">나이키</p>
          <h1 className="loginTitle">나이키 로그인</h1>
          <input
            className="loginId block"
            name="userName"
            type="text"
            placeholder="아이디"
            onChange={handleChangeInputs}
            value={inputs.userName}
          />
          <input
            className="loginPw block"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleChangeInputs}
            value={inputs.password}
          />
          <div className="loginHelp">
            <button className="block">
              <input type="checkbox" className="checkBox" />
              로그인 유지하기
            </button>
            <button className="block">아이디/비밀번호 찾기</button>
          </div>
          <button
            className="loginButton block"
            onClick={() => handleClickLogin(inputs)}
          >
            로그인
          </button>
          <button className="loginKakao block">
            <i className="fa-solid fa-message" />
            카카오계정 로그인
          </button>
          <button className="loginFacebook block">
            <i className="fa-brands fa-facebook-f" />
            페이스북으로 로그인
          </button>
          <p className="signInCheck">
            회원이 아니신가요?
            <Link to="/sign-up" className="signIn" onClick={handleCloseModal}>
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
