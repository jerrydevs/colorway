import React from 'react'
import styled from 'styled-components'

const ThemedHeader = styled.h1`
  font-size: 6rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  margin: 0;
  padding-top: 3rem;
`

function Header({children}) {
  return <ThemedHeader>{children}</ThemedHeader>
}

export default Header