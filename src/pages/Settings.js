import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FilledInput, InputLabel, MenuItem, FormControl, Select, Fab, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { containerStyle, requestGET, Title, Loader } from '../components';

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
    loaded: false,
    dormId: null,
    floorId: null,
    roomId: null,
    dorms: [],
    floors: [],
    rooms: [],
  };

  componentDidMount = () => {
    this.setState({
      dormId: this.props.dormId,
      floorId: this.props.floorId,
      roomId: this.props.roomId,
    }, () => {
      requestGET('/api/dorm/list').then((res) => {
        this.setState({ dorms: res });
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        this.setState({ loaded: true });
      });
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
                onChange={this.handleChange}
                input={<FilledInput name="dorm" id="filled-dorm-simple" />}
              >
                <MenuItem>
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
                onChange={this.handleChange}
                input={<FilledInput name="floor" id="filled-floor-simple" />}
              >
                <MenuItem>
                  <em>Не выбрано</em>
                </MenuItem>
                {this.state.floors.map((floor)=>(
                  <MenuItem value={floor.id}>{floor.name}</MenuItem>
                ))}
              </Select>
            </StyledControl>
            <StyledControl variant="filled" style={{ marginBottom: 16 }}>
              <InputLabel htmlFor="filled-room-simple">Комната</InputLabel>
              <Select
                disabled={!this.state.dormId || !this.state.floorId}
                value={this.state.roomId}
                onChange={this.handleChange}
                input={<FilledInput name="room" id="filled-room-simple" />}
              >
                <MenuItem>
                  <em>Не выбрано</em>
                </MenuItem>
                {this.state.rooms.map((room)=>(
                  <MenuItem value={room.id}>{room.name}</MenuItem>
                ))}
              </Select>
            </StyledControl>  
            <FabWrapper>
              <Fab
                variant="extended"
                color="primary"
                disabled={!this.state.dormId || !this.state.floorId || !this.state.roomId}
                component={Link}
                to="/"
              >
                Сохранить
              </Fab>
            </FabWrapper>
          </Grid>
        </Grid>
        <Loader isOpen={!this.state.loaded} />
      </Container>
    )
  }

}

export default Settings;