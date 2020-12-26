import { getStyledSystemColors } from './getStyledSystemColors'
import chroma from 'chroma-js'

// colors: {
//  primary: "#000",
//  secondary: "#fff",
//  ...
//}
export function getColorsJSON(colors) {
  const colorsJSON = {}

  Object.entries(colors).forEach((colorObj) => {
    const styledSystemColors = getStyledSystemColors(chroma(colorObj[1]))
    colorsJSON[colorObj[0]] = {}
    styledSystemColors.forEach((styledSystemColor, idx) => {
      if (idx === 0) {
        colorsJSON[colorObj[0]]['50'] = styledSystemColor.hex()
      } else {
        colorsJSON[colorObj[0]][new String(idx * 100)] = styledSystemColor.hex()
      }
    })
  })

  return colorsJSON
}
