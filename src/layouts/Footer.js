import React from 'react';
import { Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 32px 0;
  min-height: 100px;
  background-color: #eee;

  @media (min-width: 600px) {
    padding: 32px 24px;
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 600px) {
    width: 560px;
  }

  @media (min-width: 960px) {
    width: 920px;
  }

  @media (min-width: 1280px) {
    width: 1220px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${ indigo[500] };
`;

const ITCLink = styled.a`
  padding: 0 4px;
  text-decoration: none;
  background-color: ${ indigo[500] };
  color: #fff;
  font-size: 1.2em;
  vertical-align: middle;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <Typography variant="h6" component="p" gutterBottom>
        Сделано <Link href="https://vk.com/wanku">Иваном</Link> и <Link href="https://vk.com/dimaetu">Дмитрием</Link><br />
      </Typography>
      <Typography variant="subtitle2" component="p" gutterBottom>
        из команды <ITCLink href="https://vk.com/itc.digital"> ITC </ITCLink>
      </Typography>
    </FooterContainer>
  </StyledFooter>
)
export default Footer;