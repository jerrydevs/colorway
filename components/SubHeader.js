import React from 'react'
import styled from 'styled-components'

const ThemedSubHeader = styled.h2`
  font-size: 2.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
  margin: 0;
  padding-top: 3rem;
`

export default function SubHeader({children}) {
  return <ThemedSubHeader>{children}</ThemedSubHeader>
}
