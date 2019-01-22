import { indigo } from '@material-ui/core/colors'
import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'GoshaSans-Bold';
  font-size: 2rem;
  font-weight: 400;
  color: ${ indigo[500] };

  @media (min-width: 600px) {
    font-size: 3rem;
  }
`;

export default Title;