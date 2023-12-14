import React from 'react';
import { RAM } from '../../Components';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Stage2 = ({ stageOnChange, framework, getFramework }) => {
  return (
    <Container>
      <RAM
        framework={framework}
        onChange={getFramework}
        stageOnChange={stageOnChange}
      />
    </Container>
  );
};

export default Stage2;
