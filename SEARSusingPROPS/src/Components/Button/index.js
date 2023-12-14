import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  height: fit-content;
  border: unset;
  background-color: ${({ variant, color }) => {
    if (variant === 'bordered' || variant === 'no-bg') return 'white';
    else return color;
  }};
  font-size: 1rem;
  color: ${({ variant, color }) => {
    if (variant === 'bordered' || variant === 'no-bg') return color;
    else return 'white';
  }};
  border: ${({ variant, color }) => {
    if (variant === 'bordered') return `1px solid ${color}`;
    else 'none';
  }};
`;
Button.propTypes = {
  variant: PropTypes.oneOf(['bordered', 'no-bg', 'solid']).isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
