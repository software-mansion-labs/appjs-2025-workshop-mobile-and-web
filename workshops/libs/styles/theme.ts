export const themes = {
  light: {
    primary: "#FF5500",
    secondary: "#e64900",
    background: "#FFF5F0",
    surface: "#f2f2f2",
    surfaceActive: "#fff6f2",
    surfaceHighlight: "#ffe1d6",
    typography: "#000000",
    typographySecondary: "#555",
  },
  dark: {
    primary: "#FF5500",
    secondary: "#e64900",
    background: "#000000",
    surface: "#222",
    surfaceActive: "#4e1905",
    surfaceHighlight: "#141414",
    typography: "#FFF5F0",
    typographySecondary: "#999",
  },
};

export type Theme = (typeof themes)["light"];
export type ThemeKey = keyof typeof themes;
