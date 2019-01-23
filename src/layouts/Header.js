import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Avatar, Button, MenuItem, Menu } from '@material-ui/core';
import styled from 'styled-components';
import { upGuest } from '../components';
import ITCLogo from '../images/ITCLogo.svg';

const LeftBar = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: stretch;
`;

const ToHome = styled(Link)`
  display: flex;
  flex-grow: 0;
  align-items: center;
  text-decoration: none;
`;

const RightBar = styled.div`
  flex-grow: 0;
`;

const Logo = styled.img`
  height: 32px;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 8px;
  font-family: 'GoshaSans-Bold', sans-serif;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
`;

const Name = styled.span`
  text-transform: none;
  margin-right: 8px;
  line-height: 40px;
  color: #fff;
`;

const ButtonText = styled.span`
  line-height: 32px;
  color: #fff;
`;

class Header extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { auth, name, avatar } = this.props;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static">
        <Toolbar>
          <LeftBar>
            <ToHome to="/">
              <Logo src={ITCLogo} />
              <Title>
                Стирка
              </Title>
            </ToHome>
          </LeftBar>
          <RightBar>
          {auth ? (
            <Fragment>
              <Button
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
              >
                <Name>{name}</Name>
                <Avatar>
                  {avatar ? (
                    <img src={avatar} />
                  ) : name.split(/\s+/).map(word => word[0].toUpperCase()).join('') }
                </Avatar>
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose} component={Link} to="/">
                  Главная
                </MenuItem>
                <MenuItem onClick={this.handleClose} component={Link} to="/settings">
                  Настройки
                </MenuItem>
                <MenuItem onClick={this.handleClose} component="a" href="/api/logout">
                  Выход
                </MenuItem>
              </Menu>
            </Fragment>
          ):(
            <Button component="a" href="/api/login">
              <ButtonText>Войти</ButtonText>
            </Button>
          )}
          </RightBar>
        </Toolbar>
      </AppBar>
    );
  }
}

export default upGuest(Header);