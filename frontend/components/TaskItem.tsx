"use client";

import axios from "axios";
import type { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onTaskUpdate: (taskId: number, status: Task["status"]) => void;
  onTaskDelete: (taskId: number) => void;
}

export default function TaskItem({
  task,
  onTaskUpdate,
  onTaskDelete,
}: TaskItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl shadow-white border p-4">
      <h3>{task.title}</h3>
      <div className="flex flex-row gap-2">
      <select
        value={task.status}
        className="mt-2 rounded border p-2"
        onChange={async (e) => {
          const newStatus = e.target.value as Task["status"];

          await axios.patch(`/api/tasks/${task.id}`, {
            status: newStatus,
          });

          onTaskUpdate(task.id, newStatus);
        }}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <button
        type="button"
        onClick={async () => {
          await axios.delete(`/api/tasks/${task.id}`);
          onTaskDelete(task.id);
        }}
        className="mt-2 rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600 inline-block"
      >
        Delete
      </button>
      </div>
    </div>
  );
}
