import Activity from "@/components/Activity";
import { useLocalSearchParams } from "expo-router";
import { ActivityId, getActivityById } from "@/libs/data/dataRepository";
import NotFoundMessage from "@/components/NotFoundMessage";

export default function ActivityScreen() {
  const { activityId } = useLocalSearchParams<{ activityId: ActivityId }>();

  const activity = getActivityById(activityId);

  if (!activity) {
    return <NotFoundMessage />;
  }

  return <Activity activity={activity} />;
}
