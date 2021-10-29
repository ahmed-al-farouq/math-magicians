import React from 'react';
import styled from 'styled-components';

const QuoteSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

const H2 = styled.h2`
  width: 60%;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;

function Quote() {
  return (
    <QuoteSection>
      <H2>
        &quot;Mathematics is not about numbers,
        equations, computations, or algorithms: it is about understanding.&quot;
        -William Paul Thurston
      </H2>
    </QuoteSection>
  );
}

export default Quote;
