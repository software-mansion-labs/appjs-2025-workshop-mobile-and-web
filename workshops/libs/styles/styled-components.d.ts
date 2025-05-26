// styled-components setup
import { Theme } from "@/libs/styles/theme";

declare module "styled-components/native" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
