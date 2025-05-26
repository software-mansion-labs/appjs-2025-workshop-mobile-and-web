import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import cx from "classnames";
import { themes } from "@/libs/styles/theme";
import { useColorScheme } from "nativewind";

type Props = {
  streakCount: number;
};

export default function StreakFlameWidget({ streakCount }: Props) {
  const isActive = streakCount > 0;
  const { colorScheme = "light" } = useColorScheme();

  return (
    <View
      className={cx("w-[200px] flex-row items-center rounded-xl border p-3", {
        "border-primary bg-surfaceActive": isActive,
        "border-surface bg-surface": !isActive,
      })}
    >
      <View className="mr-3 rounded-full bg-surfaceHighlight p-2">
        <FontAwesome5
          name="fire"
          size={28}
          color={
            isActive
              ? themes[colorScheme].primary
              : themes[colorScheme].typographySecondary
          }
        />
      </View>
      <View>
        <Text className="text-sm/4 text-typographySecondary">Streak</Text>
        <Text className="text-lg/5 font-bold text-primary">
          {isActive ? `${streakCount} days` : "No streak"}
        </Text>
      </View>
    </View>
  );
}
