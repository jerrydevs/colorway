import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Clipboard } from 'phosphor-react'
import Color from 'color'
import toast from 'react-hot-toast'

import { calculateAccentHoverColor } from './Themes'

const Slider = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 10rem;
`

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    console.error('Failed to copy to clipboard: ', error)
  }
}

function ColorSlider({ color, theme, fullColors }) {
  const [showControls, setShowControls] = useState(false)

  const themeContext = useContext(ThemeContext)
  let background = Color(color)
  const isDark = background.isDark()
  const contrastedColor = isDark ? themeContext.white : themeContext.black
  const copyNotification = () =>
    toast(`Copied ${color.toUpperCase()}`, {
      color: themeContext.fontColor,
      background: themeContext.backgroundColor,
    })

  return (
    <Slider
      style={{ backgroundColor: color }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={copyNotification}
    >
      <Clipboard
        size={24}
        color={contrastedColor}
        hidden={!showControls}
        onClick={() => copyToClipboard(color)}
      />
      <p style={{ color: contrastedColor, fontWeight: 'bold' }}>{color.slice(1).toUpperCase()}</p>
    </Slider>
  )
}

export default ColorSlider
