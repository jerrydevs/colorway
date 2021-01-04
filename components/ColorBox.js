import React, { useState } from 'react'
import styled from 'styled-components'
import { Clipboard } from 'phosphor-react'
import toast from 'react-hot-toast'

import { copyToClipboard } from '../utils/copyToClipboard'
import { getContrastedColor } from '../utils/getContrastedColor'

const StyledBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 8rem;
  width: 100%;
`

function ColorBox({ color, ...props }) {
  const [showControls, setShowControls] = useState(false)

  const contrastedColor = getContrastedColor(color)

  const handleCopyColor = () => {
    copyToClipboard(color)
    toast(`Copied ${color.toUpperCase()}`)
  }

  return (
    <StyledBox
      {...props}
      style={{ backgroundColor: color }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <Clipboard
        size={24}
        color={contrastedColor}
        hidden={!showControls}
        onClick={handleCopyColor}
        style={{ transition: '0.3s', cursor: 'pointer' }}
      />
      <p style={{ color: contrastedColor, fontWeight: 'bold' }}>{color.slice(1).toUpperCase()}</p>
    </StyledBox>
  )
}

export default ColorBox
