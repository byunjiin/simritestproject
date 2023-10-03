import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TestStyle = styled.div `
  p{
    position: relative;
    top: 2.4em;
    font-size:1.5em;
    text-align: center;
    line-height: 160%;
  }
  #Play{
    font-size: 8em;
    border : 1px solid black;
    background : #6366f1
    color : white;
    padding : 10px;
    position: absolute;
    top: 50vh;
    left: 20%;
  }
  #Make{
    font-size: 8em;
    border : 1px solid black;
    background : #8b5cf6
    color : white;
    padding : 10px;
    position: absolute;
    top: 50vh;
    right: 20%;
  }
`;

const Test=()=>{
  return(
    <>
      <TestStyle>
        <div className='text'>
          <p>심리테스트 하길 원하시면 <strong>PLAY</strong>버튼을<br/>
          심리테스트 만들길 원하시면 <strong>MAKE</strong>버튼을<br/>
          눌러주세요!</p>
        </div>
        <div className='btn'>
          <Link to='/Play'>
            <button id='Play'>
              PLAY
            </button>
          </Link>
          <Link to='/Make'>
            <button id='Make'>
              MAKE
            </button>
          </Link>
        </div>
      </TestStyle>
    </>
  )
}

export default Test;
