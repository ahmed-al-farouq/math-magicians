import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  margin: 50px 0 0 160px;
  font-size: 25px;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    margin-left: 70px;
  }

  @media screen and (max-width: 576px) {
    margin-left: 40px;
  }
`;

const P = styled.p`
  margin: 50px auto;
  width: 80%;
  font-size: 18px;
`;

function Home() {
  return (
    <>
      <H2>
        Welcome to our page!
      </H2>
      <P>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Accusantium quisquam blanditiis quos ullam perferendis incidunt
        qui pariatur aliquam numquam eum voluptatum distinctio molestiae
        quis tenetur illo ipsum, nam unde ipsam?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Est quos excepturi obcaecati facere porro minus nesciunt,
        ipsam unde temporibus sint sunt blanditiis nihil, qui omnis
        molestiae ab debitis quasi nemo.
      </P>
      <P>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Saepe itaque modi minima eum rem incidunt, odio placeat
        soluta cum minus nostrum dicta similique quaerat vitae at
        nisi perspiciatis. Fugiat, quaerat!
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur accusamus numquam odit deleniti ab totam fugit
        placeat cum unde quis repellendus corrupti vel, impedit, ex,
        eos magni beatae nobis accusantium.
      </P>
    </>
  );
}

export default Home;
