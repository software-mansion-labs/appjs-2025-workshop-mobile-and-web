import Activity from "@/components/Activity";
import { useLocalSearchParams } from "expo-router";
import { ActivityId, getActivityById } from "@/libs/data/dataRepository";
import NotFoundMessage from "@/components/NotFoundMessage";
import WithSidePanel from "@/components/WithSidePanel";

export default function ActivityScreen() {
  const { activityId } = useLocalSearchParams<{ activityId: ActivityId }>();
  const activity = getActivityById(activityId);

  const content = activity ? (
    <Activity activity={activity} />
  ) : (
    <NotFoundMessage />
  );

  return <WithSidePanel>{content}</WithSidePanel>;
}
