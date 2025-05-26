import SettingsCard from "@/components/SettingsCard";
import { View, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <SettingsCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
});
