// nativewind setup
import "@/global.css";

import { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { UnistylesRuntime } from "react-native-unistyles";
import { ThemeProvider } from "styled-components/native";
import { colorScheme } from "nativewind";

import GridCell from "@/components/atoms/GridCell";
import { ThemeKey, themes } from "@/libs/styles/theme";
import RNStylesheetStreakFlameWidget from "@/components/styling/StreakFlameWidget";
import RNStylesheetActivitySelector from "@/components/styling/ActivitySelector";
import RNStylesheetJoinChallengeButton from "@/components/styling/JoinChallengeButton";
import { TamaguiProvider, Theme } from "tamagui";
import config from "@/tamagui.config";
import nativewindThemes from "@/libs/styles/nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StreakFlameWidget1 from "@/solutions/3.1/components/styling/StreakFlameWidget";
import ActivitySelector1 from "@/solutions/3.1/components/styling/ActivitySelector";
import JoinChallengeButton1 from "@/solutions/3.1/components/styling/JoinChallengeButton";
import StreakFlameWidget2 from "@/solutions/3.2/components/styling/StreakFlameWidget";
import ActivitySelector2 from "@/solutions/3.2/components/styling/ActivitySelector";
import JoinChallengeButton2 from "@/solutions/3.2/components/styling/JoinChallengeButton";
import StreakFlameWidget3 from "@/solutions/3.3/components/styling/StreakFlameWidget";
import ActivitySelector3 from "@/solutions/3.3/components/styling/ActivitySelector";
import JoinChallengeButton3 from "@/solutions/3.3/components/styling/JoinChallengeButton";
import { SignInForm } from "@/solutions/3.4/components/styling/SignInForm";
import RunnerLoading4 from "@/solutions/3.5/components/styling/RunnerLoading";

export default function StylePlaygroundGrid() {
  const [theme, setTheme] = useState<ThemeKey>("light");

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // React Native stylesheet / Styled Components
    setTheme(newTheme);

    // nativewind
    colorScheme.set(newTheme);

    // Unistyles
    UnistylesRuntime.setTheme(newTheme);
  };

  useEffect(() => {
    colorScheme.set("light");
  }, []);

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={[
          styles.grid,
          {
            backgroundColor: themes[theme].background,
          },
        ]}
      >
        <GridCell label="3.0. React Native's StyleSheet" theme={theme}>
          <RNStylesheetStreakFlameWidget streakCount={10} theme={theme} />
          <RNStylesheetActivitySelector theme={theme} />
          <RNStylesheetJoinChallengeButton
            onPress={() => {}}
            label="Join Challenge"
          />
        </GridCell>

        {/* styled-components setup */}
        <ThemeProvider theme={themes[theme]}>
          <GridCell label="3.1. Styled Components" theme={theme}>
            <StreakFlameWidget1 streakCount={10} />
            <ActivitySelector1 />
            <JoinChallengeButton1 onPress={() => {}} label="Join Challenge" />
          </GridCell>
        </ThemeProvider>

        <GridCell label="3.2. React Native Unistyles" theme={theme}>
          <StreakFlameWidget2 streakCount={10} />
          <ActivitySelector2 />
          <JoinChallengeButton2 onPress={() => {}} label="Join Challenge" />
        </GridCell>

        <GridCell
          label="3.3. Nativewind"
          theme={theme}
          // nativewind setup
          style={nativewindThemes[theme]}
        >
          <StreakFlameWidget3 streakCount={10} />
          <ActivitySelector3 />
          <JoinChallengeButton3 onPress={() => {}} label="Join Challenge" />
        </GridCell>

        <GridCell label="Theming" theme={theme}>
          <TouchableOpacity
            onPress={handleThemeChange}
            style={styles.themeButton}
          >
            <Text style={styles.text}>Change theme</Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                color: themes[theme].typographySecondary,
              },
            ]}
          >
            Current theme: {theme}
          </Text>
        </GridCell>

        {/* tamagui setup */}
        <TamaguiProvider config={config}>
          <Theme name={theme}>
            <GridCell label="3.4. Tamagui" theme={theme}>
              <SignInForm />
            </GridCell>
          </Theme>
        </TamaguiProvider>

        <GridCell label="3.5. Reanimated CSS Animations" theme={theme}>
          <RunnerLoading4 theme={theme} />
        </GridCell>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  themeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: themes.light.primary,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 16,
    padding: 16,
  },
});
