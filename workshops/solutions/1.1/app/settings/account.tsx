import { View, StyleSheet } from "react-native";
import AccountCard from "@/components/AccountCard";
import { useRouter } from "expo-router";

export default function Account() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <AccountCard
        name="Jane Doe"
        email="jane@example.com"
        username="jane_d"
        membership="Premium"
        joinedAt="2023-04-17T14:23:00Z"
        avatarUrl="https://ui-avatars.com/api/?name=Jane+Doe"
        onBack={() => router.back()}
      />
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
