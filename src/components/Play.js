import React from 'react';
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
`;

const Play = () => {
  return (
    <PlayStyle>
      <div className="container">
        <div class="item" id="1" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>1</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="2" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>2</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="3" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>3</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="4" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>4</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="5" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>5</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="6" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>6</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="7" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>7</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
        <div class="item" id="8" onClick={() => window.open('/Simri', '_blank')}>
          <h2><strong>8</strong></h2>
          <img src="./images/simri_photo/defalt.jpg"/>
          <p>무엇무엇하는심리테스트입니다아</p>
        </div>
      </div>
    </PlayStyle>
  );
}

export default Play;