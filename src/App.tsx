import { statuses, tasks as initialTasks, type Task } from "./utils/data-tasks";
import { TaskCard } from "./components/task-card";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);

    return {
      status,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (newTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === newTask.id ? newTask : t)),
    );
  };

  return (
    <div className="flex divide-x divide-gray-200">
      {columns.map((column) => (
        <div>
          <div className="flex items-center justify-between p-2 font-bold text-gray-500">
            <h2 className="text-3xl capitalize">{column.status}</h2>
            <span className="text-lg">
              {column.tasks.reduce((acc, task) => acc + (task.points || 0), 0)}
            </span>
          </div>
          {column.tasks.map((task) => (
            <TaskCard task={task} updateTask={updateTask} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
