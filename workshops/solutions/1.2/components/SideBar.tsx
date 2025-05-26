import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Route, useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export const SIDEBAR_WIDTH = 72;

type SideBarRoute = {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  url: Route;
};

const sideBarRoutes: SideBarRoute[] = [
  {
    title: "Home",
    icon: "home",
    url: "/",
  },
  {
    title: "Settings",
    icon: "cog",
    url: "/settings",
  },
  {
    title: "You",
    icon: "user",
    url: "/you",
  },
  {
    title: "Exercises",
    icon: "book",
    url: "/exercises",
  },
];

export default function SideBar({ state }: BottomTabBarProps) {
  const router = useRouter();

  return (
    <View style={styles.sidebar}>
      {sideBarRoutes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.title}
            onPress={() => router.navigate(route.url)}
            style={[styles.tabItem, isFocused && styles.activeTab]}
          >
            <FontAwesome
              name={route.icon}
              size={24}
              color={isFocused ? "#FF5500" : "#666"}
              style={{ marginBottom: 4 }}
            />
            <Text style={[styles.label, isFocused && styles.activeLabel]}>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: SIDEBAR_WIDTH,
    height: "100%",
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderColor: "#eee",
    paddingTop: 40,
    alignItems: "center",
    position: "absolute",
  },
  tabItem: {
    width: "100%",
    height: SIDEBAR_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#fef4ee",
    borderLeftWidth: 4,
    borderLeftColor: "#FF5500",
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  activeLabel: {
    color: "#FF5500",
    fontWeight: "600",
  },
});
