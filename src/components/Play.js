import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const PlayStyle = styled.div `
  .container{
    margin: auto;
    padding: 3em 6em;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4열 생성 */
    grid-template-rows: repeat(2, 1fr); /* 2행 생성 */
    gap: 10%; /* 그리드 아이템 사이의 간격 설정 */
  }
  .item img:hover{
    opacity:0.5;
  }
`;

const Play = () => {

  return (
    <PlayStyle>
      <div className="container">
        <div className="item" id="a" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>a</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>a 무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="b" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>b</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>b무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="c" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>c</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>c무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="d" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>d</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>d무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="e" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>e</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>e무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="f" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>f</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>f무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="g" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>g</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>g무엇무엇하는심리테스트입니다아</p>
        </div>
        <div className="item" id="h" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>h</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>h무엇무엇하는심리테스트입니다아</p>
        </div>
      </div>
    </PlayStyle>
  );
}

export default Play;