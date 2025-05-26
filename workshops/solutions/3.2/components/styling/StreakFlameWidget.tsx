import { View, Text } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  streakCount: number;
};

export default function StreakFlameWidget({ streakCount }: Props) {
  const { theme } = useUnistyles();
  const isActive = streakCount > 0;

  return (
    <View style={styles.container(isActive)}>
      <View style={styles.iconWrapper}>
        <FontAwesome5
          name="fire"
          size={28}
          color={isActive ? theme.primary : theme.typographySecondary}
        />
      </View>
      <View>
        <Text style={styles.streakLabel}>Streak</Text>
        <Text style={styles.streakCount}>
          {isActive ? `${streakCount} days` : "No streak"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: (isActive: boolean) => ({
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    width: 200,
    borderWidth: 1,
    backgroundColor: isActive ? theme.surfaceActive : theme.surface,
    borderColor: isActive ? theme.primary : theme.surface,
  }),
  iconWrapper: {
    marginRight: 12,
    padding: 8,
    borderRadius: 50,
    backgroundColor: theme.surfaceHighlight,
  },
  streakLabel: {
    fontSize: 14,
    color: theme.typographySecondary,
  },
  streakCount: {
    fontSize: 18,
    fontWeight: "700",
    color: theme.primary,
  },
}));
