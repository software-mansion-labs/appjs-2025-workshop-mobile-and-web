import { View, StyleSheet } from "react-native";
import { Route } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";

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
    url: "/settings" as Route,
  },
  {
    title: "You",
    icon: "user",
    url: "/you" as Route,
  },
  {
    title: "Exercises",
    icon: "book",
    url: "/exercises" as Route,
  },
];

export default function SideBar(_props: BottomTabBarProps) {
  return (
    <View style={styles.sidebar}>
      {sideBarRoutes.map((route) => (
        <React.Fragment key={route.title} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: SIDEBAR_WIDTH,
  },
});
