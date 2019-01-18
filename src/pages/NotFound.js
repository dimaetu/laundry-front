import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { containerStyle, Title } from '../components';

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${containerStyle}
`;

const NotFound = () => (
  <Container>
    <Title>404</Title>
    <Typography variant="h5" component="p" gutterBottom>
      Страница не найдена :(
    </Typography>
  </Container>
)

export default NotFound;