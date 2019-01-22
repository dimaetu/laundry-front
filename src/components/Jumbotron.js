import React from 'react';
import { indigo, pink } from '@material-ui/core/colors';
import styled from 'styled-components';
import WashingMachine from '../images/washing-machine.svg';
import { containerStyle } from './containerStyle';

const Section = styled.section`
  display: flex;

  min-height: 100vh;
  
  background-color: ${ pink[50] };
  
  @media (min-width: 600px) {
    min-height: 600px;
  }
`;

const Container = styled.div`
  display: flex;

  ${containerStyle}

  background-image: url('${WashingMachine}');
  background-repeat: no-repeat;
  background-position: 16px center;
  background-size: 150px auto;

  align-items: center;
  justify-content: flex-end;
  align-self: stretch;

  @media (min-width: 600px) {
    background-size: 200px auto;
  }

  @media (min-width: 960px) {
    background-size: 300px auto;
  }
`;

const Text = styled.h1`
  font-family: 'GoshaSans-Bold', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: right;
  color: ${ indigo[500] };

  @media (min-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 960px) {
    font-size: 4rem;
  }
`;

const TextAccent = styled.span`
  background-color: ${ pink[200] };
`;

const Jumbotron = () => (
  <Section>
    <Container>
      <Text>
        Делать грязную<br />
        работу стало<br />
        ещё <TextAccent>проще!</TextAccent>
      </Text>
    </Container>
  </Section>
)

export default Jumbotron;