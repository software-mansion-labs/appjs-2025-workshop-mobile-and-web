import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
} from "react-native";

type GridCellProps = {
  label: string;
  children?: React.ReactNode;
  theme: "light" | "dark";
  style?: StyleProp<ViewStyle>;
};

export default function GridCell({
  label,
  children,
  theme,
  style,
}: GridCellProps) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 570;

  return (
    <View
      style={[
        styles.cell,
        isSmallScreen && styles.cellFullWidth,
        theme === "dark" && styles.cellDark,
        style,
      ]}
    >
      <Text style={[styles.label, theme === "dark" && styles.labelDark]}>
        {label}
      </Text>
      <View
        style={[
          styles.componentPlaceholder,
          theme === "dark" && styles.componentPlaceholderDark,
        ]}
      >
        {children || (
          <Text style={styles.placeholderText}>Component goes here</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  themeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: "#FF5500",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 16,
    padding: 16,
  },
  cell: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    maxWidth: 500,
    minWidth: 250,
    minHeight: 400,
    backgroundColor: "#f9f9f9",
    borderColor: "#ddd",
  },
  cellFullWidth: {
    width: "100%",
  },
  cellDark: {
    backgroundColor: "#111",
    borderColor: "#222",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  labelDark: {
    color: "#fff",
  },
  componentPlaceholder: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    gap: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  componentPlaceholderDark: {
    backgroundColor: "#111",
    borderColor: "#444",
  },
  placeholderText: {
    fontSize: 12,
    color: "#aaa",
  },
});
