import type { Task } from "../utils/data-tasks";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="m-2 w-56 rounded-lg border border-gray-300 bg-gray-50 px-2">
      <div className="py-2">{task.title}</div>
      <div className="flex justify-between gap-4 py-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div>{task.id}</div>
          <div>{task.priority}</div>
          {task.priority === "HIGH" && (
            <div className="h-2 w-2 rounded-full bg-red-500" />
          )}
          {task.priority === "MEDIUM" && (
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
          )}
          {task.priority === "LOW" && (
            <div className="h-2 w-2 rounded-full bg-green-500" />
          )}
        </div>
        <div className="">{task.points}</div>
      </div>
    </div>
  );
}
