import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, EndRegistration, Settings, Timetable, NotFound } from './pages';
import { upAuth, onlyGuest, onlyAuth, onlyFullAuth } from './components';

class App extends Component {
  render() {
    const AccessHome = onlyGuest(Home);
    const AccessEndRegistration = onlyAuth(EndRegistration);
    const AccessTimetable = onlyFullAuth(Timetable);

    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" render={() => (
              <Fragment>
                <AccessHome />
                <AccessEndRegistration />
                <AccessTimetable />
              </Fragment>
            )}/>
            <Route exact path="/settings" component={upAuth(Settings)}/>
            <Route exact path="/timetable" component={onlyFullAuth(Timetable)}/>
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;