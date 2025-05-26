import { View, StyleSheet } from "react-native";
import PrivacyTerms from "@/components/PrivacyTerms";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PrivacyTerms contactEmail="support@running.app" />
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
