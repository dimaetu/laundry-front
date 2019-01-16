import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from './layouts';
import { Home, EndRegistration, Settings, Timetable, NotFound } from './pages';
import { upAuth, onlyGuest, onlyAuth, onlyFullAuth } from './components';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
  },
});

class App extends Component {
  render() {
    const AccessHome = onlyGuest(Home);
    const AccessEndRegistration = onlyAuth(EndRegistration);
    const AccessTimetable = onlyFullAuth(Timetable);

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
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
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;