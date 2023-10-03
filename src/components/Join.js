import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JoinStyle = styled.div `
ul { //안쪽
  list-style: none;
  display : flex;
  flex-direction: column;
  align-items: center;
}
.all{ //바깥쪽
  display : flex;
  flex-direction: column;
  align-items: center;
}
fieldset{
  border : solid 1px black;
  width: 600px;
  height: 100%;
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
//버튼들
.btn{
  margin:10px 30px;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  background-color : #c7d2fe; 
}
.part{
  display : flex;
  justify-content: center;
}
`;
const Join= () => {
  return(
    <JoinStyle>
      <div className='all'>
      <form classname="Join">
        <fieldset>
          <legend>회원가입</legend>
          <ul>
            <li>
              <label class="field" for="id">아이디 : </label>
              <input type="text" class="input-box" name="id"></input>
            </li>
            <li>
              <label class="field" for="pw">비밀번호 : </label>
              <input type="password" class="input-box" name="pw"></input>
            </li>
            <li>
              <label class="field" for="pwck">비밀번호 확인 : </label>
              <input type="password" class="input-box" name="pwck"></input>
            </li>
            <li>
              <label class="field" for="username">닉네임 : </label>
              <input type="text" class="input-box" name="username"></input>
            </li>
          </ul>
          {/* 확인->정보저장 후 로그인화면으로 돌아감
          취소->로그인화면으로 돌아감 */}
          
          <div className='part'>
          <Link to='/Login'>
            <button className='btn' id='yes'>
              확인
            </button>
          </Link>
          <Link to='/Login'>
            <button className='btn' id='no'>
              취소
            </button>
          </Link>
          </div>
        </fieldset>
      </form>
      </div>
    </JoinStyle>
  )
}

export default Join;