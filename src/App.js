import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, EndRegistration, Settings, Timetable, NotFound } from './pages';
import { upAuth, onlyGuest, onlyAuth, onlyFullAuth } from './components';

const AccessHome = () => {
  return onlyGuest(Home);
}

const AccessEndRegistration = () => {
  return onlyAuth(EndRegistration);
}

const AccessTimetable = () => {
  return onlyFullAuth(Timetable);
}

const MainPage = () => (
  <Fragment>
    <h1>SDsad</h1>
    <h2>asdsad</h2>
    <AccessHome />
    <AccessEndRegistration />
    <AccessTimetable />
  </Fragment>
)

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/" component={MainPage} />
            <Route path="/settings" component={upAuth(Settings)}/>
            <Route path="/timetable" component={onlyFullAuth(Timetable)}/>
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;