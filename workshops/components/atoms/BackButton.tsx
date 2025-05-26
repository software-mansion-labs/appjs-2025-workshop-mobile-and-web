import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type BackButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
};

export default function BackButton({ onPress, style }: BackButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <AntDesign name="arrowleft" size={20} color="#FF5500" />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginLeft: 6,
    color: "#FF5500",
    fontWeight: "600",
  },
});
