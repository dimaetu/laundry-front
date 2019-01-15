import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, EndRegistration, Settings, Timetable, NotFound } from './pages';
import { Loader } from './components';

class App extends Component {
  state = {
    checkAuth: false,
    auth: false,
    dorm: null,
    floor: null,
    room: '',
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ checkAuth: true });
    }, 1000);
  }

  setLoggedIn = (value) => {
    this.setState({
      auth: value.auth,
      dorm: value.dorm,
      floor: value.floor,
      room: value.room,
    });
  }

  render() {
    const { checkAuth, auth, dorm, floor, room } = this.state;
    return checkAuth ? (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" render={
              auth ? (
                !dorm || !floor || !room ? () => (
                  <EndRegistration setLoggedIn={this.setLoggedIn}/>
                ):() => (
                  <Timetable setLoggedIn={this.setLoggedIn}/>
                )
              ):() => (
                <Home setLoggedIn={this.setLoggedIn}/>
              )
            } />
            <Route exact path="/settings" render={
              auth ? () => (
                <Settings setLoggedIn={this.setLoggedIn}/>
              ):() => (
                <Redirect to="/" />
              )
            } />
            <Route exact path="/timetable" render={
              auth && dorm && floor && room ? () => (
                <Timetable setLoggedIn={this.setLoggedIn}/>
              ):() => (
                <Redirect to="/" />
              )
            }/>
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
