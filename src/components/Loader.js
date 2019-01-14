import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import { Portal } from 'react-portal';
import styled from 'styled-components'

const StyledGrid = styled(Grid)`
  height: 100vh;
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
                <FontAwesomeIcon icon={faSpinner} size="4x" pulse />
              </Grid>
            </StyledGrid>
          </Portal>
        )}
      </Fragment>
    );
  }
}

export default Loader;