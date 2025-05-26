// Variables must be defined in a `*.stylex.ts` file.
import { css } from "react-strict-dom";

// https://facebook.github.io/react-strict-dom/api/css/defineVars/
export const tokens = css.defineVars({
  spacingSmall: 6,
  spacingMedium: 12,
  spacingLarge: 24,
  label: {
    default: "black",
    ":hover": "darkgray",
  },
  inputColor: "red",
  inputPlaceholderColor: "pink",
});
