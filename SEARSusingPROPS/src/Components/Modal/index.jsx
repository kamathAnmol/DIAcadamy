import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000006f;
  backdrop-filter: blur(5px);
  display: grid;
`;

const Conatiner = styled.div`
  background-color: #fff;
  place-self: center;
  color: black;
  min-height: 10rem;
  min-width: 20rem;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
`;
const CloseBTN = styled.button`
  border: unset;
  background-color: transparent;
  color: black;
  position: absolute;
  font-size: 2rem;
  font-weight: 100;
  padding: unset;
  margin: unset;
  height: fit-content;
  width: fit-content;
  line-height: 0.7;
  right: 4px;
  top: 2px;
`;
const ModalContent = styled.div``;
const Modal = ({ children, onClose }) => {
  return (
    <BackDrop>
      <Conatiner>
        <CloseBTN onClick={onClose}>x</CloseBTN>
        <ModalContent>{children}</ModalContent>
      </Conatiner>
    </BackDrop>
  );
};

export default Modal;
