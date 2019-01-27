import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loader from './Loader';
import { requestGET } from './Requests';
import { withSnackbar } from 'notistack';
 
const { Provider, Consumer } = React.createContext({
  auth: false,
  name: '',
  vkId: '',
  avatar: '',
  roomId: null,
  role: null,
  updateUser: () => {},
});
 
class Auth extends Component {
  state = {
    checkAuth: false,
    auth: false,
    name: '',
    vkId: '',
    avatar: '',
    roomId: null,
    role: null,
    updateUser: (obj) => this.updateUser(obj),
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

  updateUser = (obj) => {
    this.setState(obj, () => console.log(this.state));
  }

  componentDidMount = () => {
    const { enqueueSnackbar } = this.props;
    
    requestGET('/api/v1/users/current').then((res) => {
      res.auth && this.setLoggedIn(res);
    }).catch((err) => {
      enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
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

const AuthProvider = withSnackbar(Auth);
export { AuthProvider }

export const upGuest = Component => (props) => (
  <Consumer>
    {
      ({auth, name, vkId, avatar, roomId, role, updateUser}) => (
        <Component
          auth={auth}
          name={name}
          vkId={vkId}
          avatar={avatar}
          roomId={roomId}
          role={role}
          updateUser={updateUser}
          {...props} 
        />
      )
    }
  </Consumer>
)
 
export const upAuth = Component => (props) => (
  <Consumer>
    {
      ({auth, name, vkId, avatar, roomId, role, updateUser}) => (
        auth ?
          <Component
            auth={auth}
            name={name}
            vkId={vkId}
            avatar={avatar}
            roomId={roomId}
            role={role}
            updateUser={updateUser}
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
      ({auth, name, vkId, avatar, roomId, role, updateUser}) => (
        !auth &&
        <Component
          auth={auth}
          name={name}
          vkId={vkId}
          avatar={avatar}
          roomId={roomId}
          role={role}
          updateUser={updateUser}
          {...props} 
        />
      )
    }
  </Consumer>
)
 
export const onlyAuth = Component => (props) => (
  <Consumer>
    {
      ({auth, name, vkId, avatar, roomId, role, updateUser}) => (
        auth && !roomId &&
        <Component
          auth={auth}
          name={name}
          vkId={vkId}
          avatar={avatar}
          roomId={roomId}
          role={role}
          updateUser={updateUser}
          {...props} 
        />
      )
    }
  </Consumer>
)

export const onlyFullAuth = Component => (props) => (
  <Consumer>
    {
      ({auth, name, vkId, avatar, roomId, role, updateUser}) => (
        auth && roomId ? 
          <Component
            auth={auth}
            name={name}
            vkId={vkId}
            avatar={avatar}
            roomId={roomId}
            role={role}
            updateUser={updateUser}
            {...props}
          />
        :
          <Redirect to="/" />
      )
    }
  </Consumer>
)