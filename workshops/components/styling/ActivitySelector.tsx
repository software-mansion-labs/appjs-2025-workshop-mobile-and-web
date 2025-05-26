import { View, Text, Pressable, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { ThemeKey, themes } from "@/libs/styles/theme";

const activities = [
  { key: "run", icon: "running", label: "Run" },
  { key: "bike", icon: "bicycle", label: "Ride" },
  { key: "swim", icon: "swimmer", label: "Swim" },
  { key: "walk", icon: "walking", label: "Walk" },
];

export default function ActivitySelector({ theme }: { theme: ThemeKey }) {
  const [selected, setSelected] = useState("run");

  return (
    <View style={styles.container}>
      {activities.map((activity) => {
        const isActive = selected === activity.key;
        return (
          <Pressable
            key={activity.key}
            onPress={() => setSelected(activity.key)}
            style={[
              styles.item,
              isActive && { backgroundColor: themes[theme].surfaceActive },
            ]}
          >
            <FontAwesome5
              name={activity.icon}
              size={20}
              color={
                isActive
                  ? themes[theme].primary
                  : themes[theme].typographySecondary
              }
            />
            <Text
              style={[
                styles.label,
                isActive
                  ? { color: themes[theme].primary, fontWeight: "600" }
                  : { color: themes[theme].typographySecondary },
              ]}
            >
              {activity.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  item: {
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    width: 56,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
  },
});
