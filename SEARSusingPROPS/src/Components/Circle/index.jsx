import styled from 'styled-components';
import { cellColors } from '../../Assets/Colors';

const Circle = styled.div`
  height: 4rem;
  border-radius: 100%;
  background-color: ${(props) => cellColors[props.color]};
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export default Circle;
