import { Text, View, StyleSheet, Pressable } from "react-native";

// basic styling for dialog
import "@/web-dialog.css";

export default function AlertsPage() {
  return (
    <>
      <View>
        <Text style={styles.heading}>Section 2. Alerts</Text>
      </View>
      <View style={styles.content}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Open alert</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF5500",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
    alignItems: "center",
    width: 150,
  },
  heading: {
    paddingHorizontal: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    paddingHorizontal: 12,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
