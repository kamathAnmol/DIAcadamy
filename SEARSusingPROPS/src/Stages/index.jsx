import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import styled from 'styled-components';

const StageContainer = styled.div`
  width: 98%;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  min-height: 68vh;
  margin: 1rem auto;
`;
import React, { useState } from 'react';

const Stages = ({ currentStage, onChange }) => {
  const [framework, setFramework] = useState(null);
  const getFramework = (newFramework) => setFramework(newFramework);
  return (
    <StageContainer>
      {currentStage === 1 && (
        <Stage1 stageOnChange={onChange} getFramework={getFramework} />
      )}
      {currentStage === 2 && (
        <Stage2
          stageOnChange={onChange}
          framework={framework}
          getFramework={getFramework}
        />
      )}
      {currentStage === 3 && (
        <Stage3 stageOnChange={onChange} framework={framework} />
      )}
    </StageContainer>
  );
};

export default Stages;
