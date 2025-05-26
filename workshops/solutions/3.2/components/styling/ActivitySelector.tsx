import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { Pressable } from "react-native-gesture-handler";

const activities = [
  { key: "run", icon: "running", label: "Run" },
  { key: "bike", icon: "bicycle", label: "Ride" },
  { key: "swim", icon: "swimmer", label: "Swim" },
  { key: "walk", icon: "walking", label: "Walk" },
];

export default function ActivitySelector() {
  const [selected, setSelected] = useState("run");
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      {activities.map((activity) => {
        const isActive = selected === activity.key;
        return (
          <Pressable
            key={activity.key}
            onPress={() => setSelected(activity.key)}
            style={styles.item(isActive)}
          >
            <FontAwesome5
              name={activity.icon}
              size={20}
              color={isActive ? theme.primary : theme.typographySecondary}
            />
            <Text style={styles.label(isActive)}>{activity.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  item: (isActive: boolean) => ({
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    width: 56,
    backgroundColor: isActive ? theme.surfaceActive : "transparent",
  }),
  label: (isActive: boolean) => ({
    marginTop: 6,
    fontSize: 12,
    color: isActive ? theme.primary : theme.typographySecondary,
    fontWeight: isActive ? "600" : "400",
  }),
}));
