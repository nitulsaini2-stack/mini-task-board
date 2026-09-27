"use client";

import { useState } from "react";

import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh((prev) => !prev);
  };
  return (
    <main>
      <TaskList refresh={refresh} />
      <TaskForm onTaskAdded={handleTaskAdded} />
    </main>
  );
}
