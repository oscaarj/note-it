import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const StyledFooter = styled.footer`
  background: ${colors.grey};
  grid-column: 1 / -1;
  color: white;
  order: 5;
  padding: 15px;
  text-align: center;
`

const Footer = () => (
  <StyledFooter>
    <p>a quite useless footer</p>
  </StyledFooter>
)

export default Footer
