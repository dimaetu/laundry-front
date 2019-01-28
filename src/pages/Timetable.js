import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, ButtonBase, Typography } from '@material-ui/core';
import { containerStyle, Title } from '../components';
import WashingMachine from '../images/washing-machine-white.svg';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { indigo, green, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const Container = styled.section`
  padding-top: 32px;
  padding-bottom: 96px;
  ${containerStyle}
`;

const Nav = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const NavDate = styled(Button)`
  && {
    flex-grow: 1;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const NavButton = styled(Button)`
  flex-grow: 0;
  flex-shrink: 0;
`;

const Tabs = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: 16px;
`;

const Tab = withStyles({
  root: {
    marginLeft: 8,
    marginRight: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 1,
    backgroundColor: indigo[300],
    minHeight: 100,
    '&:hover': {
      backgroundColor: indigo[500],
    },
    '&:focus': {
      backgroundColor: indigo[500],
    },
  },
  
  label: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    position: 'relative',
  }
})(Button);

const TabGreen = withStyles({
  root: {
    marginLeft: 8,
    marginRight: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 1,
    backgroundColor: green[600],
    minHeight: 100,
    '&:hover': {
      backgroundColor: green[800],
    },
    '&:focus': {
      backgroundColor: green[800],
    },
    '&:disabled': {
      backgroundColor: green[600],
    }
  },
  
  label: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    position: 'relative',
  }
})(Button);

const TabRed = withStyles({
  root: {
    marginLeft: 8,
    marginRight: 8,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 1,
    backgroundColor: red[400],
    minHeight: 100,
    '&:hover': {
      backgroundColor: red[600],
    },
    '&:focus': {
      backgroundColor: red[600],
    },
    '&:disabled': {
      backgroundColor: red[400],
    }
  },
  
  label: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    position: 'relative',
  }
})(Button);

const Time = styled.time`
  display: block;
  font-family: 'GoshaSans-Bold';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1em;
  text-align: left;
  color: #fff;
`;

const Washer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  font-family: 'GoshaSans-Bold';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1em;
  color: #fff;
`;

const WasherComponent = (props) => (
  <img src={WashingMachine} {...props}/>
)

const WasherImg = styled(WasherComponent)`
  margin-left: 4px;
  height: 20px;
  vertical-align: middle;
`;

const WasherNum = styled.span`
  vertical-align: middle;
`;

const StyledType = styled(Typography)`
  && {
    color: #fff;
  }
`;

class Timetable extends Component {
  render() {
    return (
      <Container>
        <Title>Расписание</Title>
        <Typography variant="h5" gutterBottom>Ботаническая; 2 этаж</Typography>
        <Nav>
          <NavButton variant="outlined" color="primary" component={Link} to="/"><ArrowLeft /></NavButton>
          <NavDate variant="outlined" component="p" disableRipple>2019-01-27</NavDate>
          <NavButton variant="outlined" color="primary" component={Link} to="/"><ArrowRight /></NavButton>
        </Nav>
        <Tabs>
          <Tab variant="contained" disabled>
            <Time>09:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained" disabled>
            <Time>09:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained" disabled>
            <Time>10:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained" disabled>
            <Time>10:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained" disabled>
            <Time>10:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained" disabled>
            <Time>10:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained" disabled>
            <Time>11:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained" disabled>
            <Time>11:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>11:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>11:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>12:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>12:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>12:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>12:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>13:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>13:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>13:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>13:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>14:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>14:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>14:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>14:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>15:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>15:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <TabGreen variant="contained" disabled>
            <Time>15:30</Time>
            <StyledType variant="button" align="right">Занято: 227 к.</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </TabGreen>
          <TabGreen variant="contained" disabled>
            <Time>15:30</Time>
            <StyledType variant="button" align="right">Занято: 227 к.</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </TabGreen>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>16:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>16:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>16:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <TabRed variant="contained" disabled>
            <Time>16:30</Time>
            <StyledType variant="button" align="right">Занято: 228 к.</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </TabRed>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>17:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>17:00</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
        <Tabs>
          <Tab variant="contained">
            <Time>17:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>1</WasherNum><WasherImg /></Washer>
          </Tab>
          <Tab variant="contained">
            <Time>17:30</Time>
            <StyledType variant="button" align="right">Свободно</StyledType>
            <Washer><WasherNum>2</WasherNum><WasherImg /></Washer>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default Timetable;