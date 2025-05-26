import { styled, Button } from "tamagui";

const CircleButton = styled(Button, {
  name: "CircleButton",
  circular: true,
  theme: "accent",
  mt: 16,

  variants: {
    size: {
      small: {
        width: 40,
        height: 40,
        fontSize: 20,
      },
      large: {
        width: 60,
        height: 60,
        fontSize: 32,
      },
    },
  } as const,

  defaultVariants: {
    size: "small",
  },
});

export default CircleButton;
