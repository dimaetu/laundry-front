import React from 'react';
import { Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors'
import styled from 'styled-components';
import { containerStyle } from './containerStyle';
import Title from './Title';

const Section = styled.section`
  background-color: ${ indigo[50] };
`;

const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 128px;
  ${containerStyle}
`;

const Reasons = () => (
  <Section>
    <Container>
      <Title>Зачем мне это?</Title>
      <Typography variant="h5" component="p" gutterBottom>
        Ты занятой человек. Куча дел, учёба, работа.
        И каждый день, когда приходишь домой, на постирку в очереди половина общаги.
        Чистое бельё уже закончилось. 
      </Typography>
      <br />
      <Typography variant="h5" component="p" gutterBottom>
        Запишись уже сейчас! Выбери любое удобное время для стирки прямо со своего телефона,
        будучи на парах, в метро, на работе или в любом другом месте.
        Тебе не нужно быть в общежитии, чтобы занять очередь на стирку!
      </Typography>
      <br />
      <Typography variant="h5" component="p" gutterBottom>
        Ты сможешь наблюдать, кто стирал вещи до тебя, и решить любые возникшие проблемы,
        написав ему в ВК! Так ты сэкономишь свои нервы, ведь теперь тебе не придётся выяснять,
        кто так долго стирает вещи или кто их забывает достать из стиральной машины.
      </Typography>
    </Container>
  </Section>
)

export default Reasons;