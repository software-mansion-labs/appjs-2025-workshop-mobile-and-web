import { YStack, Input, Button, Label, useMedia, Text } from "tamagui";
import CircleButton from "./CircleButton";

export function SignInForm() {
  const media = useMedia();

  return (
    <YStack width={media.maxSm ? "100%" : "80%"} p="$2">
      <Text fontSize="$6" fontWeight="bold">
        Sign In
      </Text>

      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="you@example.com" />

      <Label htmlFor="password">Password</Label>
      <Input id="password" placeholder="••••••••" secureTextEntry />

      <Button mt="$3" theme="accent">
        Log In
      </Button>

      <CircleButton>?</CircleButton>
    </YStack>
  );
}
