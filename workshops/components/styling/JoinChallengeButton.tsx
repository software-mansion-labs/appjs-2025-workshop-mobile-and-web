import { Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

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
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[
        styles.button,
        isHovered && !disabled && styles.hover,
        isPressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF5500",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  hover: {
    backgroundColor: "#e64900",
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
});
