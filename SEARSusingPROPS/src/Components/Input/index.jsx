import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const InputLabel = styled.label`
  color: #000;
  font-size: 0.8rem;
  margin-bottom: 4px;
  font-weight: 600;
`;
const StyledInput = styled.input`
  padding: 0.5rem 0.8rem;
  width: 20rem;
  outline: unset;
  border: solid 1px ${({ error }) => (error ? 'red' : 'black')};
  font-size: 1rem;
  font-weight: 500;
`;
const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
`;
const Input = ({ label, error, ...props }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor="">{label}</InputLabel>
      <StyledInput {...props} error={error ? true : false} />
      <ErrorMessage>{error && error}</ErrorMessage>
    </InputWrapper>
  );
};

export default Input;
