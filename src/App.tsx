import { statuses, tasks } from "./utils/data-tasks";
import { TaskCard } from "./components/task-card";

function App() {
  const columns = statuses.map((status) => {
    const tasksInColumn = tasks.filter((task) => task.status === status);

    return {
      status,
      tasks: tasksInColumn,
    };
  });

  return (
    <div className="flex divide-x divide-gray-200">
      {columns.map((column) => (
        <div className="">
          <h2 className="p-2 text-3xl font-bold text-gray-500 capitalize">
            {column.status}
          </h2>
          {column.tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
