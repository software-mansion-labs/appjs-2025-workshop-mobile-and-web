import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemeKey, themes } from "@/libs/styles/theme";

type Props = {
  streakCount: number;
  theme: ThemeKey;
};

export default function StreakFlameWidget({ streakCount, theme }: Props) {
  const isActive = streakCount > 0;

  return (
    <View
      style={[
        styles.container,
        isActive
          ? {
              backgroundColor: themes[theme].surfaceActive,
              borderColor: themes[theme].primary,
            }
          : {
              backgroundColor: themes[theme].surface,
            },
      ]}
    >
      <View
        style={[
          styles.iconWrapper,
          { backgroundColor: themes[theme].surfaceHighlight },
        ]}
      >
        <FontAwesome5
          name="fire"
          size={28}
          color={
            isActive ? themes[theme].primary : themes[theme].typographySecondary
          }
        />
      </View>
      <View>
        <Text
          style={[
            styles.streakLabel,
            { color: themes[theme].typographySecondary },
          ]}
        >
          Streak
        </Text>
        <Text style={[styles.streakCount]}>
          {isActive ? `${streakCount} days` : "No streak"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    width: 200,
    borderWidth: 1,
  },
  activeContainer: {
    borderWidth: 1,
  },
  iconWrapper: {
    marginRight: 12,
    padding: 8,
    borderRadius: 50,
  },
  textWrapper: {
    flex: 1,
  },
  streakLabel: {
    fontSize: 14,
  },
  streakCount: {
    fontSize: 18,
    fontWeight: "700",
    color: themes.light.primary,
  },
});
