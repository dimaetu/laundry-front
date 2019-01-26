import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loader from './Loader';
import { requestGET } from './Requests';
 
const { Provider, Consumer } = React.createContext({
  auth: false,
  name: '',
  vkId: '',
  avatar: '',
  roomId: null,
  role: null,
  setLoggedIn: () => (null),
  logout: () => (null),
});
 
export class AuthProvider extends Component {
  state = {
    checkAuth: false,
    auth: false,
    name: '',
    vkId: '',
    avatar: '',
    roomId: null,
    role: null,
    setLoggedIn: this.setLoggedIn,
    logout: this.logout,
  };

  setLoggedIn = (value) => {
    this.setState({
      auth: value.auth,
      name: value.name,
      vkId: value.vk_id,
      avatar: value.avatar,
      roomId: value.room_id,
      role: value.role,
    });
  }

  logout = () => {
    this.setState({
      auth: false,
      name: '',
      vkId: '',
      avatar: '',
      roomId: null,
      role: null,
    });
  }

  componentDidMount = () => {
    requestGET('/api/v1/users/current').then((res) => {
      res.auth && this.setLoggedIn(res);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      this.setState({ checkAuth: true });
    });
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
      ({auth, name, vkId, avatar, roomId, role, setLoggedIn, logout}) => (
        <Component
          auth={auth}
          name={name}
          vkId={vkId}
          avatar={avatar}
          roomId={roomId}
          role={role}
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
      ({auth, name, vkId, avatar, roomId, role, setLoggedIn, logout}) => (
        auth ?
          <Component
            auth={auth}
            name={name}
            vkId={vkId}
            avatar={avatar}
            roomId={roomId}
            role={role}
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
      ({auth, name, vkId, avatar, roomId, role, setLoggedIn, logout}) => (
        !auth &&
        <Component
          auth={auth}
          name={name}
          vkId={vkId}
          avatar={avatar}
          roomId={roomId}
          role={role}
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
      ({auth, name, vkId, avatar, roomId, role, setLoggedIn, logout}) => (
        auth && !roomId &&
        <Component
          auth={auth}
          name={name}
          vkId={vkId}
          avatar={avatar}
          roomId={roomId}
          role={role}
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
      ({auth, name, vkId, avatar, roomId, role, setLoggedIn, logout}) => (
        auth && roomId ? 
          <Component
            auth={auth}
            name={name}
            vkId={vkId}
            avatar={avatar}
            roomId={roomId}
            role={role}
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