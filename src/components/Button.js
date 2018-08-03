import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  background-image: linear-gradient(to bottom, #45c559 50%, #38a249 50%);
  background-size: 100% 200%;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 15px 25px;
  transition: background-position 0.2s;

  &:focus,
  &:hover {
    background-position: 0 -100%;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`

export default Button
