import React, { Component, Fragment } from 'react';
import { Header, Footer } from './';

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

export default MainLayout;