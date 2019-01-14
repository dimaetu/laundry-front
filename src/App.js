import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Loader } from './components';

const Home = (props) => (
  <h1>Route /</h1>
)

const Settings = (props) => (
  <h1>Route /settings</h1>
)

const Timetable = (props) => (
  <h1>Route /timetable</h1>
)

const NotFound = (props) => (
  <h1>NotFound</h1>
)

class App extends Component {
  state = {
    checkAuth: false,
    isLoggedIn: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ checkAuth: true });
    }, 1000);
  }

  setLoggedIn = (isLoggedIn) => {
    this.setState({ isLoggedIn });
  }

  render() {
    return this.state.checkAuth ? (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/settings" render={() => <Settings />} />
            <Route exact path="/timetable" render={() => <Timetable />}/>
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    ):(
      <Loader isOpen={true} />
    );
  }
}

export default App;
