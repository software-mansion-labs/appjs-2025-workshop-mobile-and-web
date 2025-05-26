import React from "react";
import { styled, useTheme } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

type Props = {
  streakCount: number;
};

export default function StreakFlameWidget({ streakCount }: Props) {
  const isActive = streakCount > 0;
  const theme = useTheme();

  return (
    <Container isActive={isActive}>
      <IconWrapper>
        <FontAwesome5
          name="fire"
          size={28}
          color={isActive ? theme.primary : theme.typographySecondary}
        />
      </IconWrapper>
      <View>
        <Label>Streak</Label>
        <Count>{isActive ? `${streakCount} days` : "No streak"}</Count>
      </View>
    </Container>
  );
}

const Container = styled.View<{ isActive: boolean }>`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  padding: 12px;
  width: 200px;
  border-width: 1px;
  background-color: ${(p) =>
    p.isActive ? p.theme.surfaceActive : p.theme.surface};
  border-color: ${(p) => (p.isActive ? p.theme.primary : p.theme.surface)};
`;

const IconWrapper = styled.View`
  margin-right: 12px;
  padding: 8px;
  border-radius: 50px;
  background-color: ${(p) => p.theme.surfaceHighlight};
`;

const Label = styled.Text`
  font-size: 14px;
  color: ${(p) => p.theme.typographySecondary};
`;

const Count = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${(p) => p.theme.primary};
`;
