import chroma from 'chroma-js'

const LIGHTNESS_MAP = [0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15, 0.05]
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32]

export const getStyledSystemColors = (colorChroma) => {
  const lightnessGoal = colorChroma.get('hsl.l')
  const closestLightness = LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal) ? curr : prev
  )

  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness)

  const colors = LIGHTNESS_MAP.map((l) => colorChroma.set('hsl.l', l))
    .map((color) => chroma(color))
    .map((color, i) => {
      const saturationDelta = SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex]
      return saturationDelta >= 0
        ? color.saturate(saturationDelta)
        : color.desaturate(saturationDelta * -1)
    })

  colors[baseColorIndex] = colorChroma

  // console.log('colors: ', colors)

  return colors
}
