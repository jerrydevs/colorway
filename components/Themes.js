import Color from 'color'
import Themes from '../styles/colors'

const calculateAccentColor = (bgColor) => {
  // Calculate a hover color lighter or darker than background
  // based on how bright the background color is
  const newColor = Color(bgColor)
  const luminosity = newColor.luminosity()

  // The background color is light, so the accent color must be darkened
  if (luminosity > 0.25) return newColor.darken(0.1).hex()

  // The background is dark, so the accent color must be lightened
  return newColor.lighten(0.2).hex()
}

const calculateAccentHoverColor = (bgColor) => {
  // Calculate a hover color lighter or darker than background
  // based on how bright the background color is
  const newColor = Color(bgColor)
  const luminosity = newColor.luminosity()

  // The background color is light, so the hover color must be darkened
  if (luminosity < 0.25) return newColor.darken(0.1).hex()

  // The background accent color is dark, so the hover color must be lighter
  // Using the regular default background color is usually fine
  return newColor.hex()
}

const generatePageTheme = ({
  fontColor,
  backgroundColor,
  backgroundSecondaryColor,
  accentColor,
  flareColor,
  override,
}) => ({
  autoAccentColor: calculateAccentColor(backgroundColor),
  autoAccentHoverColor: calculateAccentHoverColor(backgroundColor),
  pageContentWidth: 740,
  breakpoints: {
    mobileNav: 'min-width: 1061px',
    desktopNav: 'max-width: 1060px',
  },
  backgroundColor,
  backgroundSecondaryColor: backgroundSecondaryColor ? backgroundSecondaryColor : backgroundColor,
  fontColor,
  accentColor,
  flareColor: flareColor ? flareColor : accentColor,
  white: '#FFF',
  black: '#000',
  ...override,
})

const defaultTheme = generatePageTheme({
  fontColor: 'white',
  highlightFontColor: 'cyan',
  backgroundColor: '#000',
})

const darkTheme = generatePageTheme({
  fontColor: '#e2e5ec',
  highlightFontColor: 'aquamarine',
  backgroundColor: '#101010',
  override: {
    accentColor: '#1f1f1f',
    pageContentSelectionColor: 'aquamarine',
  },
})

const OliviaTheme = generatePageTheme({
  backgroundColor: Themes.Olivia.colors.secondary,
  fontColor: Themes.Olivia.colors.primary,
  accentColor: Themes.Olivia.colors.accent,
})

const AzureTheme = generatePageTheme({
  fontColor: Themes.Azure.colors.primary,
  backgroundColor: Themes.Azure.colors.secondary,
  accentColor: Themes.Azure.colors.accent,
})

const NightSakuraTheme = generatePageTheme({
  fontColor: Themes.NightSakura.colors.accent,
  backgroundColor: Themes.NightSakura.colors.primary,
  backgroundSecondaryColor: Themes.NightSakura.colors.secondary,
  accentColor: Themes.NightSakura.colors.accent2,
})

const OniTheme = generatePageTheme({
  backgroundColor: Themes.Oni.colors.primary,
  backgroundSecondaryColor: Themes.Oni.colors.secondary,
  fontColor: Themes.Oni.colors.accent,
  accentColor: Themes.Oni.colors.accent2,
})

const PortTheme = generatePageTheme({
  backgroundColor: Themes.Port.colors.primary,
  fontColor: Themes.Port.colors.secondary,
  accentColor: Themes.Port.colors.accent,
})

const IslanderTheme = generatePageTheme({
  backgroundColor: Themes.Islander.colors.primary,
  fontColor: Themes.Islander.colors.accent2,
  accentColor: Themes.Islander.colors.accent,
  flareColor: Themes.Islander.colors.secondary,
})

const LuxTheme = generatePageTheme({
  backgroundColor: Themes.Lux.colors.primary,
  fontColor: Themes.Lux.colors.secondary,
  accentColor: Themes.Lux.colors.secondary,
})

const BushidoTheme = generatePageTheme({
  backgroundColor: Themes.Bushido.colors.primary,
  fontColor: Themes.Bushido.colors.secondary,
  accentColor: Themes.Bushido.colors.accent,
})

const NautilusTheme = generatePageTheme({
  backgroundColor: Themes.Nautilus.colors.primary,
  backgroundSecondaryColor: Themes.Nautilus.colors.secondary,
  fontColor: Themes.Nautilus.colors.accent2,
  accentColor: Themes.Nautilus.colors.accent,
})

const NoelTheme = generatePageTheme({
  backgroundColor: Themes.Noel.colors.primary,
  backgroundSecondaryColor: Themes.Noel.colors.secondary,
  fontColor: Themes.Noel.colors.accent2,
  accentColor: Themes.Noel.colors.accent,
})

const DarlingTheme = generatePageTheme({
  backgroundColor: Themes.Darling.colors.primary,
  fontColor: Themes.Darling.colors.secondary,
  accentColor: Themes.Darling.colors.accent,
})

export {
  generatePageTheme,
  calculateAccentHoverColor,
  calculateAccentColor,
  darkTheme,
  OliviaTheme,
  AzureTheme,
  NightSakuraTheme,
  OniTheme,
  PortTheme,
  IslanderTheme,
  LuxTheme,
  BushidoTheme,
  NautilusTheme,
  NoelTheme,
  DarlingTheme,
}
export default defaultTheme
