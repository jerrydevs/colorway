import Color from 'color'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

export function getContrastedColor(color) {
  const themeContext = useContext(ThemeContext)

  const isDark = Color(color).isDark()
  return isDark ? themeContext.white : themeContext.black
}
