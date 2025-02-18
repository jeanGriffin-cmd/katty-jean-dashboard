'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a task"
        className="border p-2 rounded mr-2"
      />
      <button onClick={addTask} className="bg-deep-green text-white px-4 py-2 rounded">
        Add
      </button>
      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex justify-between items-center"
          >
            <span>{task}</span>
            <button
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;