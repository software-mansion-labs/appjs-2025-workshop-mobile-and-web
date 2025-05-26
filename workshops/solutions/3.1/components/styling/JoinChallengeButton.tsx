import React, { useState } from "react";
import { styled } from "styled-components/native";
import { Pressable } from "react-native";

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

  const backgroundColor = disabled ? "#ccc" : isHovered ? "#e64900" : "#FF5500";

  return (
    <StyledPressable
      onPress={onPress}
      disabled={disabled}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{ opacity: isPressed && !disabled ? 0.85 : 1 }}
    >
      <ButtonContainer backgroundColor={backgroundColor}>
        <Label>{label}</Label>
      </ButtonContainer>
    </StyledPressable>
  );
}

const StyledPressable = styled(Pressable)`
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

const ButtonContainer = styled.View<{ backgroundColor: string }>`
  background-color: ${(p) => p.backgroundColor};
  padding-vertical: 12px;
  padding-horizontal: 24px;
  border-radius: 100px;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
