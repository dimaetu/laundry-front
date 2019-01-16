import React, { Component, Fragment } from 'react';
import { Header, Footer } from './';
import styled from 'styled-components';

const Main = styled.main`
  padding: 0 16px 32px;
  flex-grow: 1;

  @media (min-width: 600px) {
    padding: 0 24px 32px;
  }
`;

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main>
          {this.props.children}
        </Main>
        <Footer />
      </Fragment>
    );
  }
}

export default MainLayout;