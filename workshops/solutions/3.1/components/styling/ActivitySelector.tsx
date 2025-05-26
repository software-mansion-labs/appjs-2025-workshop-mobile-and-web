import React, { useState } from "react";
import { styled, useTheme } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

const activities = [
  { key: "run", icon: "running", label: "Run" },
  { key: "bike", icon: "bicycle", label: "Ride" },
  { key: "swim", icon: "swimmer", label: "Swim" },
  { key: "walk", icon: "walking", label: "Walk" },
];

export default function ActivitySelector() {
  const [selected, setSelected] = useState("run");
  const theme = useTheme();
  return (
    <Container>
      {activities.map((activity) => {
        const isActive = selected === activity.key;
        return (
          <ItemButton
            key={activity.key}
            isActive={isActive}
            onPress={() => setSelected(activity.key)}
          >
            <FontAwesome5
              name={activity.icon}
              size={20}
              color={isActive ? theme.primary : theme.typographySecondary}
            />
            <ItemLabel isActive={isActive}>{activity.label}</ItemLabel>
          </ItemButton>
        );
      })}
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const ItemButton = styled.Pressable<{ isActive: boolean }>`
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  width: 56px;
  background-color: ${(p) =>
    p.isActive ? p.theme.surfaceActive : "transparent"};
`;

const ItemLabel = styled.Text<{ isActive: boolean }>`
  margin-top: 6px;
  font-size: 12px;
  color: ${(p) => (p.isActive ? p.theme.primary : p.theme.typographySecondary)};
  font-weight: ${(p) => (p.isActive ? "600" : "400")};
`;
