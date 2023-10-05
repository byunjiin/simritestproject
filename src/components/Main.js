import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.div `
  *{
    background : #fff;
    width : 100%;
    height : 30px;
    border: 1px solid green;
  }
`;
const Main= () => {
  return(
    <MainStyle>
    <div id='imgslide'>
      이미지와 심테링크
    </div>
    </MainStyle>
  )
}

export default Main;