import React from 'react';
import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginStyle = styled.div `
  ul {
    list-style: none;
  }
  div{
    display : flex;
    flex-direction: column;
    align-items: center;
  }
  fieldset{
    border : solid 1px black;
    width: 600px;
    height: 300px;
    font-size: 20px;
    font-weight: bold;
    padding: 30px;
    margin: 30px;
  }
  .input-box{
    display: block;
    width:350px;
    height:35px;
    margin:10px 0;
  }
  p{
    font-size: 20px;
    font-weight: bold;
    // text-align: center;
  }
  #join_btn{
    margin:0 30px;
    // width: 500px;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
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
              <label class="field" for="pw">연락처 : </label>
              <input type="password" class="input-box" name="pw"></input>
            </li>
          </ul>
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