type ActivityId = string;

type Activity = {
  activityId: ActivityId;
  name: string;
  description: string | undefined;
  duration: number; // seconds
  distance: number; // meters
  calories: number;
  photoUrl: string;
  type: string;
  date: string;
};

const activitiesMap: Record<ActivityId, Activity> = {
  act111: {
    activityId: "act111",
    name: "Morning run",
    description: "Running running...",
    duration: 1800,
    distance: 3100,
    photoUrl: "https://picsum.photos/id/37/1000/1000",
    type: "run",
    date: "2025-02-02",
    calories: 456,
  },
  act222: {
    activityId: "act222",
    name: "Evening run",
    description: undefined,
    duration: 3000,
    distance: 6000,
    photoUrl: "https://picsum.photos/id/35/1000/1000",
    type: "run",
    date: "2025-04-05",
    calories: 320,
  },
  act333: {
    activityId: "act333",
    name: "Swimming in the lake",
    description: "Open water swimming in a lake",
    duration: 1500,
    distance: 820,
    photoUrl: "https://picsum.photos/id/55/1000/1000",
    type: "swimming",
    date: "2025-12-01",
    calories: 200,
  },
  act444: {
    activityId: "act444",
    name: "Tennis with Mateusz",
    description: "Match with Mateusz, I won!",
    duration: 4200,
    distance: 3000,
    photoUrl: "https://picsum.photos/id/217/1000/1000",
    type: "tennis",
    date: "2022-06-07",
    calories: 300,
  },
};

function getActivities() {
  return Object.values(activitiesMap);
}

function getActivityById(id: ActivityId): Activity | undefined {
  return activitiesMap[id];
}

export { getActivities, getActivityById };
export type { Activity, ActivityId };
