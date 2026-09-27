export interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  created_at: string;
}