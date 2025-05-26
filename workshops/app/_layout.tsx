import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import SideBar, { SIDEBAR_WIDTH } from "@/components/SideBar";
import { Platform, useWindowDimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isWideWeb = Platform.OS === "web" && width > 600;

  const tabBar = isWideWeb
    ? (props: BottomTabBarProps) => <SideBar {...props} />
    : undefined;
  const sceneStyle = isWideWeb
    ? {
        marginLeft: SIDEBAR_WIDTH,
      }
    : undefined;

  return (
    <Tabs
      tabBar={tabBar}
      screenOptions={{
        sceneStyle,
        tabBarActiveTintColor: "#FF5500",
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="you"
        options={{
          title: "You",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          title: "Exercises",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="book" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
