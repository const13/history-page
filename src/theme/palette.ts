export const colorsPalette = {
  grey100: '#F4F5F9',
  blue: '#42567A',
  blue10: 'rgba(66, 86, 122, 0.1)',
  blue20: 'rgba(66, 86, 122, 0.2)',
  gradientBlue: 'rgba(56, 119, 238, 1)',
  gradientPink: 'rgba(239, 93, 168, 1)',
  blue1: 'rgba(56, 119, 238, .9)',
  blue01: 'rgba(56, 119, 238, .1)',
  blue2: 'rgba(93, 95, 239, 1)',
  pink1: 'rgba(239, 93, 168, .9)',
  white: 'rgba(255, 255, 255, 1)',
};

export const colorsUsage = {
  mainBg: colorsPalette.grey100,
  border10: colorsPalette.blue10,
  border20: colorsPalette.blue20,
  fontPrimary: colorsPalette.blue,
  fontSecondary: colorsPalette.gradientBlue,
  titleGradient: `linear-gradient(${colorsPalette.gradientBlue}, ${colorsPalette.gradientPink})`,
  minYear: colorsPalette.blue2,
  maxYear: colorsPalette.gradientPink,
  buttonBg: colorsPalette.white,
  buttonShadow: colorsPalette.blue01,
}