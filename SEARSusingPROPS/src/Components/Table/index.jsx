import styled from 'styled-components';
import { colors, textColors } from '../../Assets/Colors';

export const Table = styled.table`
  color: ${textColors.primary};
  width: fit-content;
`;

export const TableData = styled.td`
  background-color: ${(props) =>
    props.edited ? colors.edited : colors.default};
  box-sizing: border-box;
  width: 5rem;
`;

export const TableHead = styled.th`
  width: 5rem;
  padding: 1rem 0.5rem;
  background: ${colors.secondary};
  box-sizing: border-box;
  font-weight: 600;
`;

export const TableRow = styled.tr``;
