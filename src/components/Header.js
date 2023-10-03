import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div `
//헤더전체
  background : #c7d2fe;
  width : 100%;
  height : 6em;
//헤더위치(logo,content)
  .header{
    display: flex;
  }
//logo
  .logo{
    width: 100%;
    height: 100%;
  }
//content
  ul{
    list-style:none;
    font-size: 20px;
    position: absolute;
    top: 2.4em;
    right: 1.4em;
  }
  ul li{
    padding : 0 5px;
    display : inline;
    font-family : '돋움';
  }
`;

const Header=()=>{
  return(
    <>
      <HeaderStyle>
        <div className='header'>
          <div className='logo'>
          <Link to="/"><img src="./images/logo.png"/></Link>
          </div>
          <ul>
            <Link to="/Login"><li id='login'>LOGIN</li>|</Link>
            <Link to="/Mypage"><li id='mypage'>MY PAGE</li>|</Link>
            <Link to="/Test"><li id='test'>TEST</li></Link>
          </ul>
        </div>
      </HeaderStyle>
    </>
  )
}

export default Header;
