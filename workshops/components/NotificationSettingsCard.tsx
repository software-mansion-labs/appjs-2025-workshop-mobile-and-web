import { View, Text, StyleSheet, Switch } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useState } from "react";
import BackButton from "./atoms/BackButton";

type NotificationSettingsCardProps = {
  onBack?: () => void;
};

export default function NotificationSettingsCard({
  onBack,
}: NotificationSettingsCardProps) {
  const [activitySummary, setActivitySummary] = useState(true);
  const [followerAlerts, setFollowerAlerts] = useState(false);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [goalUpdates, setGoalUpdates] = useState(true);

  return (
    <View style={styles.card}>
      {onBack && <BackButton onPress={onBack} />}

      <Text style={styles.title}>Notifications</Text>

      <NotificationRow
        icon={<Feather name="activity" size={18} color="#FF5500" />}
        label="Activity Summary"
        value={activitySummary}
        onToggle={setActivitySummary}
      />
      <NotificationRow
        icon={<Feather name="user-plus" size={18} color="#FF5500" />}
        label="New Followers"
        value={followerAlerts}
        onToggle={setFollowerAlerts}
      />
      <NotificationRow
        icon={
          <MaterialCommunityIcons
            name="calendar-week"
            size={18}
            color="#FF5500"
          />
        }
        label="Weekly Report"
        value={weeklyReport}
        onToggle={setWeeklyReport}
      />
      <NotificationRow
        icon={
          <MaterialCommunityIcons name="target" size={18} color="#FF5500" />
        }
        label="Goal Updates"
        value={goalUpdates}
        onToggle={setGoalUpdates}
      />
    </View>
  );
}

function NotificationRow({
  icon,
  label,
  value,
  onToggle,
}: {
  icon: React.ReactNode;
  label: string;
  value: boolean;
  onToggle: (val: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Switch value={value} onValueChange={onToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    width: "100%",
    maxWidth: 500,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    color: "#222",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
});
