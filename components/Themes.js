import Color from 'color'
import Themes from '../styles/colors'

const calculateAccentColor = (bgColor) => {
  const newColor = Color(bgColor)
  const luminosity = newColor.luminosity()

  if (luminosity > 0.25) return newColor.darken(0.1).hex()

  return newColor.lighten(0.2).hex()
}

const calculateAccentHoverColor = (bgColor) => {
  const newColor = Color(bgColor)
  const luminosity = newColor.luminosity()

  if (luminosity < 0.25) return newColor.darken(0.1).hex()

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
  pageContentWidth: 850,
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

const HyperfuseTheme = generatePageTheme({
  backgroundColor: Themes.Hyperfuse.colors.secondary,
  backgroundSecondaryColor: Themes.Hyperfuse.colors.primary,
  fontColor: Themes.Hyperfuse.colors.accent,
  accentColor: Themes.Hyperfuse.colors.accent,
  flareColor: Themes.Hyperfuse.colors.accent2,
})

const MizuTheme = generatePageTheme({
  backgroundColor: Themes.Mizu.colors.primary,
  fontColor: Themes.Mizu.colors.secondary,
  accentColor: Themes.Mizu.colors.accent,
})

const BentoTheme = generatePageTheme({
  backgroundColor: Themes.Bento.colors.primary,
  fontColor: Themes.Bento.colors.secondary,
  accentColor: Themes.Bento.colors.accent,
})

const NightrunnerTheme = generatePageTheme({
  backgroundColor: Themes.Nightrunner.colors.primary,
  backgroundSecondaryColor: Themes.Nightrunner.colors.secondary,
  fontColor: Themes.Nightrunner.colors.accent,
  accentColor: Themes.Nightrunner.colors.accent,
})

const EightOhOhEightTheme = generatePageTheme({
  backgroundColor: Themes.EightOhOhEight.colors.primary,
  backgroundSecondaryColor: Themes.EightOhOhEight.colors.secondary,
  fontColor: Themes.EightOhOhEight.colors.accent,
  accentColor: Themes.EightOhOhEight.colors.accent,
  flareColor: Themes.EightOhOhEight.colors.accent2,
})

const CafeTheme = generatePageTheme({
  backgroundColor: Themes.Cafe.colors.primary,
  fontColor: Themes.Cafe.colors.secondary,
  accentColor: Themes.Cafe.colors.accent,
})

const RudyTheme = generatePageTheme({
  backgroundColor: Themes.Rudy.colors.primary,
  backgroundSecondaryColor: Themes.Rudy.colors.secondary,
  fontColor: Themes.Rudy.colors.accent,
  accentColor: Themes.Rudy.colors.accent,
})

const UmbraTheme = generatePageTheme({
  backgroundColor: Themes.Umbra.colors.primary,
  backgroundSecondaryColor: Themes.Umbra.colors.secondary,
  fontColor: Themes.Umbra.colors.accent,
  accentColor: Themes.Umbra.colors.accent2,
  flareColor: Themes.Umbra.colors.accent3,
})

export {
  generatePageTheme,
  calculateAccentHoverColor,
  calculateAccentColor,
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
  HyperfuseTheme,
  MizuTheme,
  BentoTheme,
  NightrunnerTheme,
  EightOhOhEightTheme,
  CafeTheme,
  RudyTheme,
  UmbraTheme,
}
export default defaultTheme
