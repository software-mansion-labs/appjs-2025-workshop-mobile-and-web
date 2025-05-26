import { FlatList, Pressable } from "react-native";
import { getActivities } from "@/libs/data/dataRepository";
import Activity from "@/components/Activity";
import { useRouter } from "expo-router";

export default function ActivityList() {
  const activities = getActivities();
  const router = useRouter();

  return (
    <FlatList
      data={activities}
      renderItem={(activityData) => {
        return (
          <Pressable
            onPress={() =>
              router.navigate(`/activity/${activityData.item.activityId}`)
            }
          >
            <Activity activity={activityData.item} />
          </Pressable>
        );
      }}
    />
  );
}
