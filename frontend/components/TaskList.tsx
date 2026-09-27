"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "@/components/TaskItem";
import type { Task } from "@/types/task";

interface TaskListProps {
  refresh: boolean;
}

export default function TaskList({ refresh }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks");

        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch tasks");
        setLoading(false);
      }
    };

    fetchTasks();
  }, [refresh]);

  const handleTaskUpdate = (taskId: number, nextStatus: Task["status"]) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  };
  const handleTaskDelete = (taskId: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
    setSuccess("Task deleted successfully");

    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  return (
    <div className="mx-auto mt-6 max-w-2xl space-y-3">
      {loading && (
        <p className="rounded-md bg-gray-100 p-3 text-center text-gray-600">
          Loading...
        </p>
      )}
      {success && <p className="text-center text-green-500">{success}</p>}

      {error && (
        <p className="rounded-md border border-red-200 bg-red-50 p-3 text-red-600">
          {error}
        </p>
      )}

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}
