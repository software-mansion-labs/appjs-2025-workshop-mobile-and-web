import { View, StyleSheet } from "react-native";
import ActivityList from "@/components/ActivityList";

export default function HomeScreen() {
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
