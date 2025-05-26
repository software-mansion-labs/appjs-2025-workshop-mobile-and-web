import { View, Text, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import cx from "classnames";
import { useColorScheme } from "nativewind";
import { themes } from "@/libs/styles/theme";

const activities = [
  { key: "run", icon: "running", label: "Run" },
  { key: "bike", icon: "bicycle", label: "Ride" },
  { key: "swim", icon: "swimmer", label: "Swim" },
  { key: "walk", icon: "walking", label: "Walk" },
];

export default function ActivitySelector() {
  const [selected, setSelected] = useState("run");
  const { colorScheme = "light" } = useColorScheme();

  return (
    <View className="flex-row justify-around">
      {activities.map((activity) => {
        const isActive = selected === activity.key;
        return (
          <Pressable
            key={activity.key}
            onPress={() => setSelected(activity.key)}
            className={cx("w-[56px] items-center rounded-xl p-3", {
              "bg-surfaceActive": isActive,
            })}
          >
            <FontAwesome5
              name={activity.icon}
              size={20}
              color={
                isActive
                  ? themes[colorScheme].primary
                  : themes[colorScheme].typographySecondary
              }
            />
            <Text
              className={cx("mt-1.5 text-xs", {
                "font-semibold text-primary": isActive,
                "text-typographySecondary": !isActive,
              })}
            >
              {activity.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
