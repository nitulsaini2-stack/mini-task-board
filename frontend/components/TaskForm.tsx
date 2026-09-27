"use client";

import { useState } from "react";
import axios from "axios";

interface TaskFormProps {
  onTaskAdded: () => void;
}

export default function TaskForm({ onTaskAdded }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
        setError("Please enter a task title");
      // window.alert("Please add something");
      return;
    }

    try {
      await axios.post("/api/tasks", {
        title: title.trim(),
      });

      setTitle("");
      onTaskAdded();
      setSuccess("Task Added Successfully")
    } catch (error) {
      console.log(error);
        setError("Failed to add task");
    }
  };

  return (
   <>
    {error && (
      <p className="mb-2 text-center text-red-500">
    {error}
  </p>
    )}
    {success && (
      <p className="m-2 text-center text-red-500">
      {success} </p>
    )}
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 flex max-w-2xl gap-2"
    >
      <input
        className="flex-1 rounded-md border px-3 py-2 outline-none focus:ring-2"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />

      <button
        type="submit"
        className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
      >
        Add Task
      </button>
    </form>
    </>
  );
}