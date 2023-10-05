import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const FooterStyle = styled.div `
//푸터 전체
  background : #c7d2fe;
  padding: 20px;
  width : 100%;
  height : 30%em;
//푸터 배치
  .footer{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  p{
    font-size: 15px;
  }
  .icons{
    display: inline;
  }
  #middle{
    display:flex;
    gap: 50px;
  }
`;
const Footer= () => {
  return(
    <FooterStyle>
    <div className='footer'>
      {/* 위 */}
      <div id='logo'>
        <img src="./images/logo.png"/>
      </div>
      <div id='middle'>
        {/* 왼쪽 */}
        <div id='name'>
          <h1><strong>사이트이름</strong></h1>
          <p>길고길고길고길고긴내용<br/>
          내용<br/>
          내용</p>
        </div>
        {/* 오른쪽 */}
        <div id='content'>
          <h2>CONTENT</h2>
          <ul>
            <li id='mail'><AiOutlineMail className='icons'/>&nbsp;injibyun8331@gmail.com</li>
            <li id='github'><AiFillGithub className='icons'/>&nbsp;github.com/byunjiin</li>
          </ul>
        </div>
      </div>
      {/* 아래 */}
      <div id='copy'>
        <p>© 2023. 낙지한승. All rights reserved. </p>
      </div>
    </div>
    </FooterStyle>
    
  )
}

export default Footer;