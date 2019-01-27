import React, { Component } from 'react';
import { FilledInput, InputLabel, MenuItem, FormControl, Select, Fab, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { containerStyle, requestGET, requestPOST, Title, Loader } from '../components';
import { withSnackbar } from 'notistack';

const Container = styled.section`
  padding-top: 32px;
  padding-bottom: 96px;
  ${containerStyle}
`;

const StyledControl = styled(FormControl)`
  width: 100%;
`;

const FabWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

class Settings extends Component {
  state = {
    loaded: [],
    dormId: '',
    floorId: '',
    roomId: '',
    dorms: [],
    floors: [],
    rooms: [],
  };

  componentDidMount = () => {
    const { enqueueSnackbar } = this.props;
    
    this.addLoadedElement('dorms', () => {
      requestGET(`/api/v1/dorms`).then((dorms) => {
        this.setState({ dorms });
      }).catch((err) => {
        enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
        console.log(err);
      }).finally(() => {
        this.removeLoadedElement('dorms');
      });
    });
    
    if (this.props.roomId) { 
      this.addLoadedElement('currentRoom', () => {
        requestGET(`/api/v1/rooms/${this.props.roomId}`).then((res) => {
          this.setState({
            dormId: res.dorm_id,
            floorId: res.floor_id,
            roomId: res.id,
          }, () => {
            this.addLoadedElement('floors', () => {
              requestGET(`/api/v1/dorms/${this.state.dormId}/floors`).then((floors) => {
                this.setState({ floors });
              }).catch((err) => {
                enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
                console.log(err);
              }).finally(() => {
                this.removeLoadedElement('floors');
              });
            });
            this.addLoadedElement('rooms', () => {
              requestGET(`/api/v1/floors/${this.state.floorId}/rooms`).then((rooms) => {
                this.setState({ rooms });
              }).catch((err) => {
                enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
                console.log(err);
              }).finally(() => {
                this.removeLoadedElement('rooms');
              });
            });
          });
        }).catch((err) => {
          enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
          console.log(err);
        }).finally(() => {
          this.removeLoadedElement('currentRoom');
        });
      });
    }
  };

  addLoadedElement = (element, callback) => {
    this.setState((prev) => ({
      loaded: [...prev.loaded, element]
    }), callback);
  }

  removeLoadedElement = (element) => {
    let loaded = [...this.state.loaded];
    loaded.splice(loaded.indexOf(element), 1);
    this.setState({ loaded });
  }

  handleDorm = (event) => {
    const { enqueueSnackbar } = this.props;
    this.setState({
      dormId: event.target.value,
      floorId: '',
      roomId: '',
    }, () => {
      this.addLoadedElement('floors', () => {
        requestGET(`/api/v1/dorms/${this.state.dormId}/floors`).then((floors) => {
          this.setState({ floors });
        }).catch((err) => {
          enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
          console.log(err);
        }).finally(() => {
          this.removeLoadedElement('floors')
        });
      });
    });
  };

  handleFloor = (event) => {
    const { enqueueSnackbar } = this.props;
    this.setState({
      floorId: event.target.value,
      roomId: '',
    }, () => {
      this.addLoadedElement('rooms', () => {
        requestGET(`/api/v1/floors/${this.state.floorId}/rooms`).then((rooms) => {
          this.setState({ rooms });
        }).catch((err) => {
          enqueueSnackbar('Ошибка при соединении с сервером', { variant: 'error' });
          console.log(err);
        }).finally(() => {
          this.removeLoadedElement('rooms');
        });
      });
    });
  };

  handleRoom = (event) => {
    this.setState({
      roomId: event.target.value,
    });
  };

  sendRoom = () => {
    const { enqueueSnackbar, updateUser } = this.props;
    this.addLoadedElement('sendRoom', () => {
      requestPOST(`/api/v1/users/current/update`, {
        room_id: this.state.roomId,
      }).then((res) => {
        if (!res.success) {
          enqueueSnackbar(res.message, { variant: 'error' });
        }
        if (!res.auth) {
          updateUser({
            auth: false,
            name: '',
            vkId: '',
            avatar: '',
            roomId: null,
            role: null,
          });
        }
        if (res.success) {
          enqueueSnackbar(res.message, { variant: 'success' });
          updateUser({
            roomId: this.state.roomId,
          });
        }
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        this.removeLoadedElement('sendRoom');
      });
    });
  }

  render() {
    return (
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <Title>Настройки</Title>
            <StyledControl variant="filled" style={{ marginBottom: 16 }}>
              <InputLabel htmlFor="filled-dorm-simple">Общежитие</InputLabel>
              <Select
                value={this.state.dormId}
                onChange={this.handleDorm}
                input={<FilledInput name="dormId" id="filled-dorm-simple" />}
              >
                <MenuItem value="">
                  <em>Не выбрано</em>
                </MenuItem>
                {this.state.dorms.map((dorm)=>(
                  <MenuItem value={dorm.id}>{dorm.name}</MenuItem>
                ))}
              </Select>  
            </StyledControl>
            <StyledControl variant="filled" style={{ marginBottom: 16 }}>
              <InputLabel htmlFor="filled-floor-simple">Этаж</InputLabel>
              <Select
                disabled={!this.state.dormId}
                value={this.state.floorId}
                onChange={this.handleFloor}
                input={<FilledInput name="floorId" id="filled-floor-simple" />}
              >
                <MenuItem value="">
                  <em>Не выбрано</em>
                </MenuItem>
                {this.state.floors.map((floor)=>(
                  <MenuItem value={floor.id}>{floor.number}</MenuItem>
                ))}
              </Select>
            </StyledControl>
            <StyledControl variant="filled" style={{ marginBottom: 16 }}>
              <InputLabel htmlFor="filled-room-simple">Комната</InputLabel>
              <Select
                disabled={!this.state.dormId || !this.state.floorId}
                value={this.state.roomId}
                onChange={this.handleRoom}
                input={<FilledInput name="roomId" id="filled-room-simple" />}
              >
                <MenuItem value="">
                  <em>Не выбрано</em>
                </MenuItem>
                {this.state.rooms.map((room)=>(
                  <MenuItem value={room.id}>{room.number}</MenuItem>
                ))}
              </Select>
            </StyledControl>  
            <FabWrapper>
              <Fab
                variant="extended"
                color="primary"
                disabled={!this.state.dormId || !this.state.floorId || !this.state.roomId}
                onClick={this.sendRoom}
              >
                Сохранить
              </Fab>
            </FabWrapper>
          </Grid>
        </Grid>
        <Loader isOpen={!!this.state.loaded.length} />
      </Container>
    )
  }
}

export default withSnackbar(Settings);