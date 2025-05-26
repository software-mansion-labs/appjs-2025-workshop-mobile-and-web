import { Text, Pressable } from "react-native";
import { useState } from "react";
import cx from "classnames";

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
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={cx("rounded-full px-6 py-3", {
        "opacity-85": isPressed && !disabled,
        "bg-gray-400": disabled,
        "bg-primary hover:bg-secondary": !disabled,
      })}
    >
      <Text className="text-base/5 font-bold text-white">{label}</Text>
    </Pressable>
  );
}
