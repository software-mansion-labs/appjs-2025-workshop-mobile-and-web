import { View, StyleSheet } from "react-native";
import NotificationSettingsCard from "@/components/NotificationSettingsCard";
import { useRouter } from "expo-router";

export default function Notifications() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <NotificationSettingsCard onBack={() => router.back()} />
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
