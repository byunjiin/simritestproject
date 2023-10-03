import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div `
//푸터 전체
  background : #ddd6fe;
  width : 100%;
  height : 10em;
//푸터 배치
  footer{
    border: 1px solid blue;
    position :
  }
`;
const Footer= () => {
  return(
    <div className='footer'>
      <div id='name'>
        <h1>사이트이름</h1>
        <p>내용</p>
      </div>
      <div id='content'>
        <h1>CONTENT</h1>
        <ul>
          <li>i</li>
        </ul>
      </div>
      </div>
  )
}

export default Footer;