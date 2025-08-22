export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export type Task = {
  title: string;
  id: string;
  status: Status;
  priority: Priority;
  points?: number;
};

export const statuses: Status[] = ['TODO', 'IN_PROGRESS', 'DONE'];
export const priorities: Priority[] = ['LOW', 'MEDIUM', 'HIGH'];
