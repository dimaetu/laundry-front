import React from 'react';
import { Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors'
import styled from 'styled-components';
import { containerStyle } from './containerStyle';

const Container = styled.section`
  padding-top: 32px;
  padding-bottom: 128px;
  ${containerStyle}
`;

const Title = styled.h2`
  font-family: 'GoshaSans-Bold';
  font-size: 3rem;
  color: ${ indigo[500] };
`;

const AboutSite = () => (
  <Container>
    <Title>Куда я попал?</Title>
    <Typography variant="h5" component="p" gutterBottom>
      Ты попал в сказку!!! Если ты учишься в РЭУ и живёшь в общежитии,
      то тебе должно быть знакомо, какие усилия нужно приложить для постирки своих вещей.
      Ждать, пока освободится машинка, и стоять в очереди - не круто в 21 веке!
    </Typography>
    <br />
    <Typography variant="h5" component="p" gutterBottom>
      Теперь появилась возможность записываться на стирку онлайн, без СМС, но с регистрацией.
    </Typography>
  </Container>
)

export default AboutSite;