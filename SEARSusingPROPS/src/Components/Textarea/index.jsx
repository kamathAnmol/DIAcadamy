import React from 'react';
import styled from 'styled-components';

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TextareaLabel = styled.label`
  color: #000;
  font-size: 0.8rem;
  margin-bottom: 4px;
  font-weight: 600;
`;
const StyledTextarea = styled.textarea`
  padding: 0.3rem 0.8rem;
  width: 20rem;
  outline: unset;
  border: solid 1px ${({ error }) => (error ? 'red' : 'black')};
  font-size: 1rem;
`;
const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
`;
const Textarea = ({ label, error, ...props }) => {
  return (
    <TextareaWrapper>
      <TextareaLabel htmlFor="">{label}</TextareaLabel>
      <StyledTextarea {...props} error={error ? true : false} rows={5} />
      <ErrorMessage>{error && error}</ErrorMessage>
    </TextareaWrapper>
  );
};

export default Textarea;
