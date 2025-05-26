import { Text, View, StyleSheet, Image } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import type { Activity as ActivityType } from "@/libs/data/dataRepository";

type ActivityProps = {
  activity: ActivityType;
};

export default function Activity({ activity }: ActivityProps) {
  return (
    <View style={styles.container}>
      {activity.photoUrl && (
        <Image source={{ uri: activity.photoUrl }} style={styles.imageBanner} />
      )}

      <View style={styles.header}>
        <Text style={styles.activityType}>{activity.type}</Text>
        <Text style={styles.activityName}>{activity.name}</Text>
        <Text style={styles.date}>
          {new Date(activity.date).toDateString()}
        </Text>
      </View>

      <View style={styles.statsBar}>
        <View style={styles.statBox}>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={20}
            color="#FF5500"
          />
          <Text style={styles.statValue}>{activity.distance} km</Text>
          <Text style={styles.statLabel}>Distance</Text>
        </View>
        <View style={styles.statBox}>
          <FontAwesome5 name="stopwatch" size={20} color="#FF5500" />
          <Text style={styles.statValue}>{activity.duration} min</Text>
          <Text style={styles.statLabel}>Time</Text>
        </View>
        <View style={styles.statBox}>
          <MaterialCommunityIcons name="fire" size={20} color="#FF5500" />
          <Text style={styles.statValue}>{activity.calories} kcal</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
      </View>

      {activity.description && (
        <Text style={styles.description}>{activity.description}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    margin: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageBanner: {
    width: "100%",
    height: 180,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  activityType: {
    fontSize: 12,
    color: "#FF5500",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  activityName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: "#777",
    marginBottom: 8,
  },
  statsBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#f9f9f9",
  },
  statBox: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  statLabel: {
    fontSize: 12,
    color: "#999",
  },
  description: {
    padding: 16,
    fontSize: 14,
    color: "#444",
  },
});
