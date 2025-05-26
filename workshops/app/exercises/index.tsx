import { Link } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Exercises() {
  return (
    <View style={styles.container}>
      <Link href="/exercises/alerts" style={styles.link}>
        Section 2. Alerts
      </Link>
      <Link href="/exercises/styling" style={styles.link}>
        Section 3. Styling
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
    textDecorationLine: "underline",
  },
});
