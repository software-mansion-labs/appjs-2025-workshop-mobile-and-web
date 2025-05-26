import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type LifetimeStatsProps = {
  totalDistance: number;
  totalTime: number;
  elevationGain: number;
  activitiesCount: number;
  avgPace: string;
  calories: number;
};

export default function LifetimeStats({
  totalDistance,
  totalTime,
  elevationGain,
  activitiesCount,
  avgPace,
  calories,
}: LifetimeStatsProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Lifetime Stats</Text>
      <View style={styles.statsGrid}>
        <Stat icon="route" label="Distance" value={`${totalDistance} km`} />
        <Stat icon="clock" label="Time" value={`${totalTime} min`} />
        <Stat icon="mountain" label="Elevation" value={`${elevationGain} m`} />
        <Stat icon="calendar" label="Activities" value={`${activitiesCount}`} />
        <Stat icon="tachometer-alt" label="Avg Pace" value={avgPace} />
        <Stat icon="fire" label="Calories" value={`${calories} kcal`} />
      </View>
    </View>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  const IconMap: any = {
    route: <FontAwesome5 name="route" size={20} color="#FF5500" />,
    clock: <FontAwesome5 name="clock" size={20} color="#FF5500" />,
    mountain: <FontAwesome5 name="mountain" size={20} color="#FF5500" />,
    calendar: <FontAwesome5 name="calendar" size={20} color="#FF5500" />,
    "tachometer-alt": (
      <FontAwesome5 name="tachometer-alt" size={20} color="#FF5500" />
    ),
    fire: <FontAwesome5 name="fire" size={20} color="#FF5500" />,
  };

  return (
    <View style={styles.statItem}>
      {IconMap[icon]}
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    width: "100%",
    maxWidth: 500,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#222",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statItem: {
    width: "48%",
    marginBottom: 20,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#888",
  },
});
