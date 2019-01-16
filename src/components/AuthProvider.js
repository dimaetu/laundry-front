import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loader from './Loader';
 
const { Provider, Consumer } = React.createContext({
  auth: false,
  dorm: null,
  floor: null,
  room: '',
  setLoggedIn: () => (null),
  logout: () => (null),
});
 
export class AuthProvider extends Component {
  state = {
    checkAuth: false,
    auth: false,
    dorm: null,
    floor: null,
    room: '',
    setLoggedIn: this.setLoggedIn,
    logout: this.logout,
  };

  setLoggedIn = (value) => {
    this.setState({
      auth: value.auth,
      dorm: value.dorm,
      floor: value.floor,
      room: value.room,
    });
  }

  logout = () => {
    this.setState({
      auth: false,
      dorm: null,
      floor: null,
      room: '',
    });
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ checkAuth: true });
    }, 1000);
  }

  render() {
    const { checkAuth } = this.state;

    return (
      <Provider value={this.state}>
        {checkAuth ? (
          this.props.children
        ):(
          <Loader isOpen={true} />
        )}
      </Provider>
    )
  }
}

export const upGuest = Component => (props) => (
  <Consumer>
    {
      ({auth, dorm, floor, room, setLoggedIn, logout}) => (
        <Component
          auth={auth}
          dorm={dorm}
          floor={floor}
          room={room}
          setLoggedIn={setLoggedIn}
          logout={logout}
          {...props} 
        />
      )
    }
  </Consumer>
)
 
export const upAuth = Component => (props) => (
  <Consumer>
    {
      ({auth, dorm, floor, room, setLoggedIn, logout}) => (
        auth ?
          <Component
            auth={auth}
            dorm={dorm}
            floor={floor}
            room={room}
            setLoggedIn={setLoggedIn}
            logout={logout}
            {...props} 
          />
        :
          <Redirect to="/" />
      )
    }
  </Consumer>
)

export const onlyGuest = Component => (props) => (
  <Consumer>
    {
      ({auth, dorm, floor, room, setLoggedIn, logout}) => (
        !auth &&
        <Component
          auth={auth}
          dorm={dorm}
          floor={floor}
          room={room}
          setLoggedIn={setLoggedIn}
          logout={logout}
          {...props} 
        />
      )
    }
  </Consumer>
)
 
export const onlyAuth = Component => (props) => (
  <Consumer>
    {
      ({auth, dorm, floor, room, setLoggedIn, logout}) => (
        auth && (!dorm || !floor || !room) &&
        <Component
          auth={auth}
          dorm={dorm}
          floor={floor}
          room={room}
          setLoggedIn={setLoggedIn}
          logout={logout}
          {...props} 
        />
      )
    }
  </Consumer>
)

export const onlyFullAuth = Component => (props) => (
  <Consumer>
    {
      ({auth, dorm, floor, room, setLoggedIn, logout}) => (
        auth && dorm && floor && room ? 
          <Component
            auth={auth}
            dorm={dorm}
            floor={floor}
            room={room}
            setLoggedIn={setLoggedIn}
            logout={logout}
            {...props}
          />
        :
          <Redirect to="/" />
      )
    }
  </Consumer>
)