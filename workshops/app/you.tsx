import LifetimeStats from "@/components/LifetimeStats";
import { View, StyleSheet } from "react-native";

export default function You() {
  return (
    <View style={styles.container}>
      <LifetimeStats
        totalDistance={564}
        totalTime={2145}
        elevationGain={2499}
        activitiesCount={214}
        avgPace="5:10/km"
        calories={12455}
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
