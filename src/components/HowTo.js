import React from 'react';
import { Typography, Fab } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors'
import styled from 'styled-components';
import { containerStyle } from './containerStyle';
import Title from './Title';

const Container = styled.section`
  padding-top: 32px;
  padding-bottom: 96px;
  ${containerStyle}
`;

const List = styled.ol`
  padding-left: 56px;
  margin-bottom: 64px;
`;

const ListItem = styled.li`
  margin-bottom: 32px;
  font-family: 'GoshaSans-Bold';
  font-size: 2rem;
  font-weight: 400;
  color: ${ indigo[500] };

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

const FabWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HowTo = () => (
  <Container>
    <Title>Как пользоваться?</Title>
    <List>
      <ListItem>
        <Typography variant="h5" component="p" gutterBottom>
          Зарегистрируйся с помощью ВК
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5" component="p" gutterBottom>
          Заполни данные о том, где ты живёшь
        </Typography>
      </ListItem>
      <ListItem>
        <Typography variant="h5" component="p" gutterBottom>
          Запишись на стирку
        </Typography>
      </ListItem>
    </List>
    <FabWrapper>
      <Fab variant="extended" color="primary" component="a" href="/api/login">
        Зарегистрироваться
      </Fab>
    </FabWrapper>
  </Container>
)

export default HowTo;