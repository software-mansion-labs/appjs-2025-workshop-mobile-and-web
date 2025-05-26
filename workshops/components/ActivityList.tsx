import { FlatList } from "react-native";
import { getActivities } from "@/libs/data/dataRepository";
import Activity from "@/components/Activity";

export default function ActivityList() {
  const activities = getActivities();

  return (
    <FlatList
      data={activities}
      renderItem={(activityData) => {
        return <Activity activity={activityData.item} />;
      }}
    />
  );
}
