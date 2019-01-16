import React from 'react';
import { indigo, pink } from '@material-ui/core/colors';
import styled from 'styled-components';
import WashingMachine from '../images/washing-machine.svg';

const Jumbotron = styled.section`
  display: flex;

  margin-left: -16px;
  margin-right: -16px;
  min-height: 100vh;
  
  background-color: ${ pink[50] };
  
  @media (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    min-height: 600px;
  }
`;

const JumboContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;

  background-image: url('${WashingMachine}');
  background-repeat: no-repeat;
  background-position: 16px center;
  background-size: 150px auto;

  align-items: center;
  justify-content: flex-end;
  align-self: stretch;

  @media (min-width: 600px) {
    width: 560px;
    background-size: 200px auto;
  }

  @media (min-width: 960px) {
    width: 920px;
    background-size: 300px auto;
  }

  @media (min-width: 1280px) {
    width: 1220px;
  }
`;

const JumboText = styled.h1`
  font-family: 'GoshaSans-Bold', sans-serif;
  font-size: 2.5rem;
  text-align: right;
  color: ${ indigo[500] };

  @media (min-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 960px) {
    font-size: 4rem;
  }
`;

const JumboTextAccent = styled.span`
  background-color: ${ pink[200] };
`;

const Home = (props) => (
  <Jumbotron className="container">
    <JumboContainer>
      <JumboText>
        Делать грязную<br />
        работу стало<br />
        ещё <JumboTextAccent>проще!</JumboTextAccent>
      </JumboText>
    </JumboContainer>
  </Jumbotron>
)

export default Home;