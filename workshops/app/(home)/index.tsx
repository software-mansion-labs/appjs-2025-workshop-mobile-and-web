import { View, StyleSheet, Platform, useWindowDimensions } from "react-native";
import ActivityList from "@/components/ActivityList";
import { Redirect } from "expo-router";
import { getActivities } from "@/libs/data/dataRepository";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isWideScreen = Platform.OS === "web" && width > 800;

  if (isWideScreen) {
    const activities = getActivities();
    const firstActivity = activities[0];

    return <Redirect href={`/activity/${firstActivity.activityId}`} />;
  }

  return (
    <View style={styles.container}>
      <ActivityList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
    width: "100%",
    alignSelf: "center",
  },
});
