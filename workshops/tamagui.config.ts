// tamagui setup
import { createTamagui } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { themes } from "./libs/styles/tamagui-theme";

const config = createTamagui({
  ...defaultConfig,
  themes,
});

type Conf = typeof config;

declare module "tamagui" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
