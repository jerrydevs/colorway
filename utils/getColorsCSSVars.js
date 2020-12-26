import { getStyledSystemColors } from './getStyledSystemColors'
import chroma from 'chroma-js'

// colors: {
//  primary: "#000",
//  secondary: "#fff",
//  ...
//}
export function getColorsCSSVars(colors) {
  let colorsCSS = ':root {\n'

  Object.entries(colors).forEach((colorObj) => {
    const styledSystemColors = getStyledSystemColors(chroma(colorObj[1]))
    const colorName = colorObj[0]
    styledSystemColors.forEach((styledSystemColor, idx) => {
      if (idx === 0) {
        colorsCSS = colorsCSS + `  --${colorName}-50: ${styledSystemColor.hex()};\n`
      } else {
        colorsCSS =
          colorsCSS + `  --${colorName}-${new String(idx * 100)}: ${styledSystemColor.hex()};\n`
      }
    })
  })

  colorsCSS = colorsCSS + `}`
  console.log('colorsCSS: ', colorsCSS)
  return colorsCSS
}
