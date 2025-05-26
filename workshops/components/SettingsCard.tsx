import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SettingsCard() {
  const router = useRouter();
  const [metricUnits, setMetricUnits] = useState(true);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Settings</Text>

      <SettingRow
        icon={<Feather name="user" size={20} color="#555" />}
        label="Edit Profile"
        onPress={() => router.navigate("/settings/account")}
      />
      <SettingRow
        icon={<FontAwesome5 name="ruler" size={18} color="#555" />}
        label="Units"
        rightComponent={
          <Switch value={metricUnits} onValueChange={setMetricUnits} />
        }
      />
      <SettingRow
        icon={<MaterialIcons name="lock-outline" size={20} color="#555" />}
        label="Privacy"
        onPress={() => {}}
      />
      <SettingRow
        icon={<Feather name="bell" size={20} color="#555" />}
        label="Notifications"
        onPress={() => router.navigate("/settings/notifications")}
      />

      <TouchableOpacity style={styles.logoutButton}>
        <Feather name="log-out" size={18} color="#FF5500" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingRow({ icon, label, rightComponent, onPress }: any) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress} disabled={!onPress}>
      <View style={styles.left}>
        {icon}
        <Text style={styles.label}>{label}</Text>
      </View>
      {rightComponent && <View>{rightComponent}</View>}
    </TouchableOpacity>
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
    gap: 32,
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
  logoutButton: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    color: "#FF5500",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
});
