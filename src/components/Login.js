import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginStyle = styled.div `
  ul { //안쪽
    list-style: none;
    display : flex;
    flex-direction: column;
    align-items: center;
  }
  div{ //바깥쪽
    display : flex;
    flex-direction: column;
    align-items: center;
  }
  // login form 부분
  fieldset{
    border : solid 1px black;
    width: 600px;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
    margin: 30px;
    position: relative;
  }
  .input-box{
    display: block;
    width:350px;
    height:35px;
    margin:10px 0;
  }
  .login_btn{
    padding: 2px;
    position: absolute;
    bottom: 18%;
    right: 6%;
    border : solid 1px black;
  }
  // join form 부분
  p{
    font-size: 15px;
    font-weight: bold;
    display : flex;
    justify-content: center;
  }
  #join_btn{
    margin:10px 30px;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
    background-color : #c7d2fe; 
  }
`;
const Login= () => {
  return(
    <LoginStyle>
      <div>
      <form classname="Login">
        <fieldset>
          <legend>로그인</legend>
          <ul>
            <li>
              <label class="field" for="id">아이디 : </label>
              <input type="text" class="input-box" name="id"></input>
            </li>
            <li>
              <label class="field" for="pw">비밀번호 : </label>
              <input type="password" class="input-box" name="pw"></input>
            </li>
          </ul>
          {/* 로그인버튼->login은 logout으로 변환, mypage열림, test열림 */}
          <Link to='/'>
            <button className='login_btn' id='yes'>
              로그인
            </button>
          </Link>
        </fieldset>
      </form>
      <form classname='Join'>
        <p>신규 회원이신가요?</p>
        <Link to='/Join'>
          <button id='join_btn'>
            회원가입
          </button>
        </Link>
      </form>
      </div>
    </LoginStyle>
  )
}

export default Login;