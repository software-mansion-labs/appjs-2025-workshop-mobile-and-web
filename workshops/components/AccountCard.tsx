import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import BackButton from "./atoms/BackButton";

type AccountCardProps = {
  name: string;
  email: string;
  username: string;
  membership: "Free" | "Premium";
  joinedAt: string; // ISO string
  avatarUrl?: string;
  onBack?: () => void;
};

export default function AccountCard({
  name,
  email,
  username,
  membership,
  joinedAt,
  avatarUrl,
  onBack,
}: AccountCardProps) {
  return (
    <View style={styles.card}>
      {onBack && <BackButton onPress={onBack} />}
      <View style={styles.topRow}>
        <Image
          source={{
            uri: avatarUrl || "https://ui-avatars.com/api/?name=" + name,
          }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <DetailRow icon="mail" label="Email" value={email} />
        <DetailRow icon="star" label="Membership" value={membership} />
        <DetailRow
          icon="calendar"
          label="Joined"
          value={new Date(joinedAt).toDateString()}
        />
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Feather name="edit-3" size={16} color="#fff" />
        <Text style={styles.editText}>Edit Account</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  const iconMap: Record<string, React.ReactNode> = {
    mail: <Feather name="mail" size={16} color="#888" />,
    star: <Feather name="star" size={16} color="#888" />,
    calendar: (
      <MaterialCommunityIcons name="calendar-month" size={16} color="#888" />
    ),
  };

  return (
    <View style={styles.row}>
      <View style={styles.iconLabel}>
        {iconMap[icon]}
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
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
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  username: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  details: {
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: "#666",
  },
  value: {
    fontSize: 14,
    color: "#333",
  },
  editButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#FF5500",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
});
