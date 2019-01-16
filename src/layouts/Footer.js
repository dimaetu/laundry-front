import React from 'react';
import { Typography } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 32px 16px;
  min-height: 100px;
  background-color: #eee;

  @media (min-width: 600px) {
    padding: 32px 24px;
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
    <Typography variant="h6" component="p" gutterBottom>
      Сделано <Link href="https://vk.com/wanku">Иваном</Link> и <Link href="https://vk.com/dimaetu">Дмитрием</Link><br />
    </Typography>
    <Typography variant="subtitle2" component="p" gutterBottom>
      из команды <ITCLink href="https://vk.com/itc.digital"> ITC </ITCLink>
    </Typography>
  </StyledFooter>
)
export default Footer;