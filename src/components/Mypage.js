import React from 'react';
import styled from 'styled-components';

const MypageStyle = styled.div `
  .Mypage{
    position: relative;
  }
  form{
    width: 500px;
    position: absolute;
    top:40%;
    left: 10%;
  }
  fieldset{
    border : solid 1px black;
    font-size: 20px;
  }
  ul{
    padding: 30px;
  }
  label{
    display: inline;
  }
  p{
    display: inline;
  }
  #btn{
    margin:10px 30px;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
    background-color : #c7d2fe; 
    position: absolute;
    top:50%;
    left: 70%;
  }
`;
const Mypage= () => {
  return(
    <MypageStyle>
      <div>
      <form classname="Mypage">
        <fieldset>
          <legend>내 정보</legend>
          <ul>
            <li>
              <label class="field" for="name">닉네임 : </label>
              <p>받아온 닉네임 정보</p>
            </li>
            <li>
              <label class="field" for="id">아이디 : </label>
              <p>받아온 아이디 정보</p>
            </li>
            <li>
              <label class="field" for="pw">비밀번호 : </label>
              <p>받아온 비밀번호 정보</p>
            </li>
          </ul>
        </fieldset>
      </form>
      <button id='btn' onClick={() => window.open('/Recode', '_blank')}>
        전적보기
      </button>
      </div>
    </MypageStyle>
  )
}

export default Mypage;