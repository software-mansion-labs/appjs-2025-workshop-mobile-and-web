// tamagui setup - this was generated with https://tamagui.dev/theme

import { createThemes, defaultComponentThemes } from "@tamagui/theme-builder";
import * as Colors from "@tamagui/colors";

const darkPalette = [
  "hsla(0, 53%, 10%, 1)",
  "hsla(18, 98%, 10%, 1)",
  "hsla(18, 98%, 17%, 1)",
  "hsla(18, 98%, 23%, 1)",
  "hsla(18, 98%, 29%, 1)",
  "hsla(18, 98%, 36%, 1)",
  "hsla(18, 98%, 42%, 1)",
  "hsla(18, 98%, 49%, 1)",
  "hsla(18, 98%, 53%, 1)",
  "hsla(18, 98%, 57%, 1)",
  "hsla(0, 15%, 93%, 1)",
  "hsla(0, 15%, 99%, 1)",
];
const lightPalette = [
  "hsla(0, 53%, 100%, 1)",
  "hsla(18, 98%, 97%, 1)",
  "hsla(18, 98%, 95%, 1)",
  "hsla(18, 98%, 93%, 1)",
  "hsla(18, 98%, 89%, 1)",
  "hsla(18, 98%, 86%, 1)",
  "hsla(18, 98%, 83%, 1)",
  "hsla(18, 98%, 75%, 1)",
  "hsla(18, 98%, 67%, 1)",
  "hsla(18, 98%, 60%, 1)",
  "hsla(0, 15%, 15%, 1)",
  "hsla(0, 15%, 1%, 1)",
];

const lightShadows = {
  shadow1: "rgba(0,0,0,0.04)",
  shadow2: "rgba(0,0,0,0.08)",
  shadow3: "rgba(0,0,0,0.16)",
  shadow4: "rgba(0,0,0,0.24)",
  shadow5: "rgba(0,0,0,0.32)",
  shadow6: "rgba(0,0,0,0.4)",
};

const darkShadows = {
  shadow1: "rgba(0,0,0,0.2)",
  shadow2: "rgba(0,0,0,0.3)",
  shadow3: "rgba(0,0,0,0.4)",
  shadow4: "rgba(0,0,0,0.5)",
  shadow5: "rgba(0,0,0,0.6)",
  shadow6: "rgba(0,0,0,0.7)",
};

// we're adding some example sub-themes for you to show how they are done, "success" "warning", "error":

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: [
        "hsla(18, 98%, 50%, 1)",
        "hsla(18, 98%, 51%, 1)",
        "hsla(18, 98%, 52%, 1)",
        "hsla(18, 98%, 53%, 1)",
        "hsla(18, 98%, 54%, 1)",
        "hsla(18, 98%, 55%, 1)",
        "hsla(18, 98%, 57%, 1)",
        "hsla(18, 98%, 58%, 1)",
        "hsla(18, 98%, 59%, 1)",
        "hsla(18, 98%, 60%, 1)",
        "hsla(250, 50%, 90%, 1)",
        "hsla(250, 50%, 95%, 1)",
      ],
      light: [
        "hsla(18, 98%, 50%, 1)",
        "hsla(18, 98%, 51%, 1)",
        "hsla(18, 98%, 53%, 1)",
        "hsla(18, 98%, 55%, 1)",
        "hsla(18, 98%, 57%, 1)",
        "hsla(18, 98%, 58%, 1)",
        "hsla(18, 98%, 60%, 1)",
        "hsla(18, 98%, 62%, 1)",
        "hsla(18, 98%, 63%, 1)",
        "hsla(18, 98%, 65%, 1)",
        "hsla(250, 50%, 95%, 1)",
        "hsla(250, 50%, 95%, 1)",
      ],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
});

export type Themes = typeof builtThemes;

export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === "client" &&
  process.env.NODE_ENV === "production"
    ? ({} as any)
    : (builtThemes as any);
