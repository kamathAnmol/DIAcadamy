import React, { useState } from 'react';
import { getValues } from '../../Utils';
import { Table, TableData, TableHead, TableRow } from '../Table';
import Circle from '../Circle';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 5px;
`;

const RotatedText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  text-align: center;
`;

const RDM = ({ min, max, getValue }) => {
  const [selected, setSeleted] = useState(null);
  const valueMatrix = getValues(+min, +max);
  const head = ['Low', 'Med', 'High'];
  const handleClick = (value, row, col) => {
    setSeleted(`${row},${col}`);
    getValue(value);
  };
  return (
    <div>
      <p style={{ textAlign: 'center' }}>Likelihood of risk occuring</p>
      <Container>
        <RotatedText>Overall Impact of Risk</RotatedText>
        <Table>
          <thead>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Low</TableHead>
              <TableHead>Med</TableHead>
              <TableHead>High</TableHead>
            </TableRow>
          </thead>
          <tbody>
            {valueMatrix.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableHead>{head[rowIndex]}</TableHead>
                {row.map((value, colIndex) => (
                  <TableData
                    edited={
                      selected == `${rowIndex},${colIndex}` ? true : false
                    }
                    key={colIndex}
                    onClick={() => handleClick(value, rowIndex, colIndex)}
                  >
                    <Circle color={value.color}>{value.value}</Circle>
                  </TableData>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default RDM;
