import React, { Component, Fragment } from 'react';
import { Header, Footer } from './';
import styled from 'styled-components';

const Main = styled.main`
  padding-bottom: 32px;
  flex-grow: 1;
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