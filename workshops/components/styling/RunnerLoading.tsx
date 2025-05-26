import { View, StyleSheet, Text } from "react-native";
import Animated, { CSSAnimationKeyframes } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes, ThemeKey } from "@/libs/styles/theme";

const animationName: CSSAnimationKeyframes = {};

export default function RunnerLoading({ theme }: { theme: ThemeKey }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.circle}>
        <Animated.View
          // @ts-expect-error Expo is overriding reanimated types
          style={{
            animationName,
          }}
        >
          <FontAwesome5
            name="running"
            size={32}
            color={themes[theme].primary}
          />
        </Animated.View>
      </View>
      <Text style={[styles.label, { color: themes[theme].typography }]}>
        Loading your run…
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: themes.light.primary,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.3,
  },
});
