import { ReactNode } from "react";
import { Platform, StyleSheet, useWindowDimensions, View } from "react-native";
import ActivityList from "@/components/ActivityList";

export default function WithSidePanel({ children }: { children: ReactNode }) {
  const { width } = useWindowDimensions();
  const isWideScreen = Platform.OS === "web" && width > 800;

  // on mobile, we simply return provided children
  if (!isWideScreen) {
    return children;
  }

  // on widescreen web we wrap and add ActivityList as a side panel
  return (
    <View style={styles.container}>
      <View style={styles.leftPane}>
        <ActivityList />
      </View>
      <View style={styles.mainPane}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  leftPane: {
    flex: 1,
    width: 300,
    maxWidth: 300,
  },
  mainPane: {
    flex: 1,
    maxWidth: 1200,
  },
});
