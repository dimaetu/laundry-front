import React, { Fragment } from 'react';
import { Jumbotron, AboutSite, Reasons, HowTo } from '../components';

const Home = () => (
  <Fragment>
    <Jumbotron />
    <AboutSite />
    <Reasons />
    <HowTo />
  </Fragment>
)

export default Home;