import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
 
const { Provider, Consumer } = React.createContext({
  auth: false,
  dorm: null,
  floor: null,
  room: '',
});
 
export class AuthProvider extends Component {
  render() {
    return <Provider value={this.props.value}>{this.props.children}</Provider>
  }
}
 
export const withAuth = Component => (props) => (
  <Consumer>
    {
      ({auth}) => (
        auth ? <Component {...props} /> : <Redirect to="/" />
      )
    }
  </Consumer>
)

export const withAuthSettings = Component => props => (
  <Consumer>
    {
      ({auth, dorm, floor, room}) => (
        auth && dorm && floor && room ? <Component {...props} /> : <Redirect to="/" />
      )
    }
  </Consumer>
)