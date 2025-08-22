export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type Priority = "LOW" | "MEDIUM" | "HIGH";

export type Task = {
  title: string;
  id: string;
  status: Status;
  priority: Priority;
  points?: number;
};

export const statuses: Status[] = ["TODO", "IN_PROGRESS", "DONE"];
export const priorities: Priority[] = ["LOW", "MEDIUM", "HIGH"];

export const tasks: Task[] = [
  {
    title: "Do Market Research",
    id: "BUS-1",
    status: "TODO",
    priority: "HIGH",
    points: 5,
  },
  {
    title: "Cooking Some Food",
    id: "BUS-2",
    status: "TODO",
    priority: "HIGH",
    points: 6,
  },
  {
    title: "Study at the Library",
    id: "BUS-3",
    status: "IN_PROGRESS",
    priority: "MEDIUM",
    points: 7,
  },
  {
    title: "Playing Football",
    id: "BUS-4",
    status: "DONE",
    priority: "LOW",
    points: 9,
  },
];
