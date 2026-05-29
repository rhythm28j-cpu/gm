export const palette = {
  pepperoniRed: "#7D2520",
  firebrickOven: "#A53726",
  orbitalBlue: "#1C3144",
  crust: "#FAE6A3",
  starlight: "#FCFBF8",
} as const;

export type PaletteColor = keyof typeof palette;

export const lightThemeColors = {
  background: palette.starlight,
  foreground: palette.orbitalBlue,
  primary: palette.pepperoniRed,
  primaryHover: palette.firebrickOven,
  accent: palette.crust,
  muted: "#4A6278",
  border: "#E8DFC8",
} as const;

export const darkThemeColors = {
  background: palette.orbitalBlue,
  foreground: palette.starlight,
  primary: palette.firebrickOven,
  primaryHover: palette.pepperoniRed,
  accent: "#2A4158",
  muted: "#B8C5D0",
  border: "#2F4559",
} as const;

export type ThemeColors = typeof lightThemeColors;
