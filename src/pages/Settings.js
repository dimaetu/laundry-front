import React, { Component }from 'react';
import { FilledInput, InputLabel, MenuItem, FormControl, Select  } from '@material-ui/core';
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


class Settings extends Component {
  state = {
    dorm: '',
    name: 'hai',
    labelWidth: 0,
    dorms: [],
  };

  componentDidMount = () => {
    //делаем запрос на сервер
    this.setState({
      dorms: ["Стремянный", "Ботаническая"]

    });
    };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Title>Настройки</Title>
        <StyledControl variant="filled">
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

      </Container>
    )
  }

}

export default Settings;