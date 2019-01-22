import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { FilledInput, InputLabel, MenuItem, FormControl, Select, Fab  } from '@material-ui/core';
import styled from 'styled-components';
import { containerStyle, Title } from '../components';

const Container = styled.section`
  padding-top: 32px;
  padding-bottom: 128px;
  height: 100vh;
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
    name: 'hai',
    labelWidth: 0,
    dorm: '',
    floor: '',
    room: '',
    dorms: [],
    floors: [],
    rooms: [],
  };

  componentDidMount = () => {
    //делаем запрос на сервер
    this.setState({
      dorms: ["Стремянный", "Ботаническая"],
      floors: [1, 2, 3, 4, 5, 6],
      rooms: [1, 2, 3, 4, 5, 6],
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Title>Настройки</Title>
        <StyledControl variant="filled" style={{ marginBottom: 16 }}>
          <InputLabel htmlFor="filled-dorm-simple">Общежитие</InputLabel>
          <Select
            value={this.state.dorm}
            onChange={this.handleChange}
            input={<FilledInput name="dorm" id="filled-dorm-simple" />}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {this.state.dorms.map((dorm)=>(
              <MenuItem value={dorm}>{dorm}</MenuItem>
            ))}
          </Select>  
        </StyledControl>
        <StyledControl variant="filled" style={{ marginBottom: 16 }}>
          <InputLabel htmlFor="filled-floor-simple">Этаж</InputLabel>
          <Select disabled={!this.state.dorm}
            value={this.state.floor}
            onChange={this.handleChange}
            input={<FilledInput name="floor" id="filled-floor-simple" />}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {this.state.floors.map((floor)=>(
              <MenuItem value={floor}>{floor}</MenuItem>
            ))}
          </Select>
        </StyledControl>
        <StyledControl variant="filled" style={{ marginBottom: 16 }}>
          <InputLabel htmlFor="filled-room-simple">Комната</InputLabel>
          <Select disabled={!this.state.dorm || !this.state.floor}
            value={this.state.room}
            onChange={this.handleChange}
            input={<FilledInput name="room" id="filled-room-simple" />}
          >
            <MenuItem value="">
              <em>Не выбрано</em>
            </MenuItem>
            {this.state.rooms.map((room)=>(
              <MenuItem value={room}>{room}</MenuItem>
            ))}
          </Select>
        </StyledControl>  
        <FabWrapper>
          <Fab variant="extended" color="primary" disabled={!this.state.dorm || !this.state.floor || !this.state.room} component={Link} to="/">
            Сохранить
          </Fab>
        </FabWrapper>
      </Container>
    )
  }

}

export default Settings;