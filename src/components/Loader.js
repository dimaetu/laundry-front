import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
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