import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Fab } from '@material-ui/core';
import styled from 'styled-components';
import { Title, containerStyle } from '../components';

const Container = styled.section`
  padding-top: 32px;
  padding-bottom: 96px;
  ${containerStyle}
`;

const FabWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;


const EndRegistration = (props) => (
  <Container>
    <Title>Ну, почти...</Title>
    <Typography variant="h5" component="p" gutterBottom>
      Осталось перейти в настройки и заполнить данные о себе.<br />
      Совсем скоро ты сожешь записаться на стирку!
    </Typography>
    <FabWrapper>
      <Fab variant="extended" color="primary" component={Link} to="/settings">
        Настройки
      </Fab>
    </FabWrapper>
  </Container>
);

export default EndRegistration;