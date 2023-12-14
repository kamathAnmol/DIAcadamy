import React from 'react';
import { Button, RAM } from '../../Components';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Stage3 = ({ stageOnChange, framework }) => {
  return (
    <Container>
      <RAM preview={true} framework={framework} stageOnChange={stageOnChange} />
    </Container>
  );
};

export default Stage3;
