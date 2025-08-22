import { statuses, type Task, type Status } from './utils/data-tasks';
import { TaskCard } from './components/task-card';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);

    return {
      status,
      tasks: tasksInColumn,
    };
  });

  const updateTask = (newTask: Task) => {
    fetch(`http://localhost:3000/tasks/${newTask.id}`, {
      method: 'PUT',
      body: JSON.stringify(newTask),
    });

    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === newTask.id ? newTask : t)),
    );
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    setCurrentHoveringOver(null);

    const id = e.dataTransfer.getData('id');
    const task = tasks.find((task) => task.id === id);
    if (task) {
      updateTask({ ...task, status });
    }
  };

  const [currentHoveringOver, setCurrentHoveringOver] = useState<Status | null>(
    null,
  );

  const handleDragEnter = (status: Status) => {
    setCurrentHoveringOver(status);
  };

  return (
    <div className='flex divide-x divide-gray-200'>
      {columns.map((column) => (
        <div
          onDrop={(e) => handleDrop(e, column.status)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => handleDragEnter(column.status)}
          className='w-62'
        >
          <div className='flex items-center justify-between p-2 font-bold text-gray-500'>
            <h2 className='text-3xl capitalize'>{column.status}</h2>
            <span className='text-lg'>
              {column.tasks.reduce((acc, task) => acc + (task.points || 0), 0)}
            </span>
          </div>
          <div
            className={`h-full transition-colors ${currentHoveringOver === column.status ? 'bg-gray-200' : ''}`}
          >
            {column.tasks.map((task) => (
              <TaskCard task={task} updateTask={updateTask} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
