//이전에 방문한 기록이 남아있는 페이지
import React from 'react';
import styled from 'styled-components';

const RecodeStyle = styled.div `
`;
const Recode= () => {
  return(
    <RecodeStyle>
      <div className='recode'>
        이전기록들
      </div>
    </RecodeStyle>
  );
}

export default Recode;