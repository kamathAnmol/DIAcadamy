import React, { useState } from 'react';
import styled from 'styled-components';
import { Navbar } from './Components';
import Stages from './Stages';
const StyledRoot = styled.div`
  width: 90vw;
  min-height: 80vh;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 1rem auto;
`;

const SEARS = () => {
  const [stage, setStage] = useState(1);
  const handleStageChange = (newStage) => setStage(newStage);

  return (
    <StyledRoot>
      <Navbar currentStage={stage} />
      <Stages currentStage={stage} onChange={handleStageChange} />
    </StyledRoot>
  );
};

export default SEARS;
