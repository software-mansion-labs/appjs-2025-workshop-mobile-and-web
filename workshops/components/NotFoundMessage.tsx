import { Text, View, StyleSheet } from "react-native";

export default function NotFoundMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Resource not found.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
