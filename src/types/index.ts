export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Todo' | 'In Progress' | 'Review' | 'Done';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  assignee: {
    name: string;
    avatar: string;
  };
  dueDate: string;
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  members: string[];
  thumbnail: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
}