import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Avatar, Button, MenuItem, Menu } from '@material-ui/core';
import styled from 'styled-components';

const LeftBar = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
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
  text-transform: uppercase;
`;

const Name = styled.span`
  text-transform: none;
  margin-right: 8px;
  line-height: 40px;
  color: #fff;
`;

const ButtonText = styled.span`
  line-height: 40px;
  color: #fff;
`;

class Header extends Component {
  state = {
    isLoggedIn: false,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { isLoggedIn, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBar position="static">
        <Toolbar>
          <LeftBar>
            <Logo src={process.env.PUBLIC_URL + 'images/ITCLogo.svg'} />
            <Title>
              Стирка
            </Title>
          </LeftBar>
          <RightBar>
          {isLoggedIn ? (
            <Fragment>
              <Button
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
              >
                <Name>Ivan Salugin</Name>
                <Avatar>IS</Avatar>
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
                <MenuItem>
                  Настройки
                </MenuItem>
                <MenuItem>
                  Выход
                </MenuItem>
              </Menu>
            </Fragment>
          ):(
            <Button><ButtonText>Войти</ButtonText></Button>
          )}
          </RightBar>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;