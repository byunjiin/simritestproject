import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SimriStyle = styled.div`
  .simri {
    margin: 0;
    padding: 0;
    border: 1px solid red;
  }
`;

const Simri = () => {

  const questionList = ['1','2','3','4','5'];
  const [question, setQeustion] = useState(0);

  const Click = () => {
    setQeustion(question + 1);
  }

  const answerList = ['1','2','3','4'];
  const [answer, setAnswer] = useState(0);

  return (
    <SimriStyle>
      <div className="simri">

        <div className="a">
          <h1><strong>a</strong></h1>
          <ol className='Q' id='one'>{questionList[question]}
            <li className='A'><button onClick = {Click}>{answerList[answer]}</button></li>
          </ol>
        </div>

        {/* <div className="b">
          <h1><strong>심리테스트제목(b)</strong></h1>
          <ol className='Q' id='one'>첫번째질문
            <li className='A'>답변1</li>
            <li className='A'>답변2</li>
          </ol>
          <ol className='Q' id='two'>두번째질문
            <li className='A'>답변1</li>
            <li className='A'>답변2</li>
          </ol>
          <ol className='Q' id='three'>세번째질문
            <li className='A'>답변1</li>
            <li className='A'>답변2</li>
          </ol>
          <ol className='Q' id='four'>네번째질문
            <li className='A'>답변1</li>
            <li className='A'>답변2</li>
          </ol>
          <ol className='Q' id='five'>다섯번째질문
            <li className='A'>답변1</li>
            <li className='A'>답변2</li>
          </ol>
        </div> */}

      </div>
    </SimriStyle>
  );
}

export default Simri;