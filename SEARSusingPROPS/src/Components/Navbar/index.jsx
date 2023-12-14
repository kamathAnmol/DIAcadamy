import React from 'react';
import styled from 'styled-components';
import { colors } from '../../Assets/Colors';

const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  color: #000;
  width: 98%;
  padding: 1rem;
`;
const NavbarItem = styled.div`
  text-align: center;
  background-color: ${({ active }) =>
    active ? colors.active : colors.default};
  padding: 0.6rem;
`;

const Navbar = ({ currentStage }) => {
  const Stages = ['Define Framework Parameters', 'Seeding Values', 'Preview'];
  return (
    <NavbarContainer>
      {Stages.map((stage, index) => (
        <NavbarItem active={currentStage === index + 1}>{stage}</NavbarItem>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
