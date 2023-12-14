import React, { useEffect, useState } from 'react';
import { Table, TableData, TableHead, TableRow } from '../Table';
import Circle from '../Circle';
import Modal from '../Modal';
import RDM from '../RDM';
import Button from '../Button';
import { colors, textColors } from '../../Assets/Colors';
import styled from 'styled-components';
import Textarea from '../Textarea';

const RDMModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const RDMButtons = styled.div`
  display: flex;
  gap: 5px;
  align-self: end;
`;

const ErrorMessage = styled.span`
  height: 1rem;
  color: red;
`;

const RAM = ({ framework, preview, stageOnChange, onChange }) => {
  const [farmeworkState, setFrameworkState] = useState(
    JSON.parse(JSON.stringify(framework)),
  );
  const [showRDM, setShowRDM] = useState(false);
  const [RDMValue, setRDMValue] = useState(null);
  const [currentCell, setCurrentCell] = useState(null);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [RDMError, setRDMError] = useState(null);
  const colSum = [];
  farmeworkState.features.map((feature, colIndex) => {
    let sum = 0;
    farmeworkState.characteristics.map((chars, rowIndex) => {
      sum += farmeworkState.valueMatrix[rowIndex][colIndex].value;
    });
    colSum.push(sum);
  });

  const handleClick = (row, col) => {
    if (preview) return;
    setCurrentCell(`${row},${col}`);
    setShowRDM(true);
  };
  const handleSubmit = () => {
    if (RDMValue === null || answer === '') {
      setRDMError('Select a value And Give An Answer');
      return;
    }
    const newValueMatrix = JSON.parse(
      JSON.stringify(farmeworkState.valueMatrix),
    );
    const [row, col] = currentCell.split(',');
    newValueMatrix[row][col] = {
      value: RDMValue.value,
      answer: answer,
      color: RDMValue.color,
    };
    setFrameworkState({ ...farmeworkState, valueMatrix: newValueMatrix });
    setShowRDM(false);
    setCurrentCell(null);
    setRDMValue(null);
    setAnswer(null);
  };

  const handleRDMChange = (value) => {
    setRDMValue(value);
  };
  const handleClose = () => {
    setShowRDM(false);
    setCurrentCell(null);
    setRDMValue(null);
  };

  const handleNext = () => {
    const isEdited = farmeworkState.valueMatrix.every((row) =>
      row.every((col) => col.answer !== ''),
    );
    if (!isEdited) {
      setError('Edit all cells');
      return;
    } else {
      onChange(farmeworkState);
      stageOnChange(3);
    }
  };
  return (
    <div>
      <Table>
        <thead>
          <TableHead>Risk Criteria</TableHead>
          {farmeworkState.features.map((feature, key) => (
            <TableHead key={key}>{feature}</TableHead>
          ))}
          <TableHead>Total</TableHead>
        </thead>
        <tbody>
          {farmeworkState.valueMatrix.map((row, rowIndex) => {
            let rowSum = 0;
            return (
              <TableRow key={rowIndex}>
                <TableHead>
                  {farmeworkState.characteristics[rowIndex]}
                </TableHead>

                {row.map((col, colIndex) => {
                  rowSum += col.value;
                  return (
                    <TableData
                      key={`${rowIndex},${colIndex}`}
                      edited={col.answer.length > 0 ? true : false}
                      onClick={() => handleClick(rowIndex, colIndex)}
                    >
                      <Circle color={col.color}>{col.value}</Circle>
                    </TableData>
                  );
                })}
                <TableHead>{rowSum}</TableHead>
              </TableRow>
            );
          })}
          <TableRow>
            <TableHead>Total</TableHead>
            {colSum.map((sum) => (
              <TableHead>{sum}</TableHead>
            ))}
            <TableHead></TableHead>
          </TableRow>
        </tbody>
      </Table>
      <ErrorMessage>{error && error}</ErrorMessage>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '1rem',
          width: 'fit-content',
          margin: '1rem auto',
        }}
      >
        <Button
          color={colors.active}
          variant="bordered"
          onClick={() => stageOnChange(preview ? 2 : 1)}
        >
          Previous
        </Button>
        {!preview && (
          <Button color={colors.active} variant="solid" onClick={handleNext}>
            Next
          </Button>
        )}
      </div>
      {showRDM && (
        <Modal onClose={handleClose}>
          <RDMModal>
            <RDM
              max={farmeworkState.maxValue}
              min={farmeworkState.minValue}
              getValue={handleRDMChange}
            />
            <Textarea
              label={farmeworkState.question}
              placeholder="Enter the Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <ErrorMessage>{RDMError && RDMError}</ErrorMessage>
            <RDMButtons>
              <Button color={colors.red} variant="solid" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                color={colors.active}
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </RDMButtons>
          </RDMModal>
        </Modal>
      )}
    </div>
  );
};

export default RAM;
