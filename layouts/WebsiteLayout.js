import React from 'react'
import styled from 'styled-components'
import Color from 'color'

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.pageContentSelectionColor};
  overflow: hidden;
  * ::selection {
    background: ${({ theme }) => theme.pageContentSelectionColor};
  }
  * ::-mox-selection {
    background: ${({ theme }) => new Color(theme.pageContentSelectionColor).darken(0.5).hex()};
  }
  p {
    color: ${({ theme }) => theme.pageContentFontColor}
  }
`

function WebsiteLayout({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

export default WebsiteLayout
