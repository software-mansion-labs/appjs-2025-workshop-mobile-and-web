// nativewind setup
import { vars } from "nativewind";

const themes = {
  light: vars({
    "--color-primary": "#FF5500",
    "--color-secondary": "#e64900",
    "--color-background": "#FFF5F0",
    "--color-surface": "#f2f2f2",
    "--color-surface-active": "#fff6f2",
    "--color-surface-highlight": "#ffe1d6",
    "--color-typography": "#000000",
    "--color-typography-secondary": "#555",
  }),
  dark: vars({
    "--color-primary": "#FF5500",
    "--color-secondary": "#e64900",
    "--color-background": "#000000",
    "--color-surface": "#222",
    "--color-surface-active": "#4e1905",
    "--color-surface-highlight": "#141414",
    "--color-typography": "#FFF5F0",
    "--color-typography-secondary": "#999",
  }),
};

export default themes;
