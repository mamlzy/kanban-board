export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Task = {
  title: string;
  id: string;
  status: Status;
  points?: number;
};

export const statuses: Status[] = ['TODO', 'IN_PROGRESS', 'DONE'];

export const tasks: Task[] = [
  {
    title: 'Do Market Research',
    id: 'BUS-1',
    status: 'TODO',
    points: 5,
  },
  {
    title: 'Cooking Some Food',
    id: 'BUS-1',
    status: 'TODO',
    points: 5,
  },
  {
    title: 'Study at the Library',
    id: 'BUS-2',
    status: 'IN_PROGRESS',
    points: 7,
  },
  {
    title: 'Playing Football',
    id: 'BUS-3',
    status: 'DONE',
    points: 9,
  },
];
