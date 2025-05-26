import { Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useState } from "react";
import { Pressable } from "react-native-gesture-handler";

type Props = {
  onPress: () => void;
  disabled?: boolean;
  label?: string;
};

export default function JoinChallengeButton({
  onPress,
  disabled = false,
  label = "Join Challenge",
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={({ pressed }) => styles.button(isHovered, pressed, disabled)}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: (isHovered: boolean, pressed: boolean, disabled: boolean) => ({
    backgroundColor: theme.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: "center",
    ...(isHovered && { backgroundColor: theme.secondary }),
    ...(pressed && { opacity: 0.85 }),
    ...(disabled && { backgroundColor: "#ccc", opacity: 1 }),
  }),
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
}));
