import React, { Component, Fragment } from 'react';
import { Header, Main, Footer } from './layouts';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
