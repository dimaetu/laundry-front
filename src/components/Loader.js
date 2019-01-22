import React, { Component, Fragment } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { Portal } from 'react-portal';
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
`

class Loader extends Component {
  render() {
    return (
      <Fragment>
        {this.props.isOpen && (
          <Portal>
            <StyledGrid
              container
              alignItems="center"
              justify="center"
              direction="row"
            >
              <Grid item>
                <CircularProgress size={80} />
              </Grid>
            </StyledGrid>
          </Portal>
        )}
      </Fragment>
    );
  }
}

export default Loader;