import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';




class Timetable extends Component {
  state = {
    loaded: false,
    dormId: null,
    floorId: null,
    roomId: null,
    dorms: [],
    floors: [],
    rooms: [],
  };

  render() {
    return (
      <div>
        <Button 
        variant="contained" 
        href="#contained-buttons"
        component={Link}
        to="/"
        > 
            <ChevronLeft/>
      </Button>
      <Button 
      variant="contained" 
      href="#contained-buttons"
      component={Link}
      to="/"
      > 
          <ChevronRight/>
      </Button>
    </div>
    )
  }
}

export default Timetable;