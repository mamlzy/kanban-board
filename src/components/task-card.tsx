import type { Task } from "../utils/data-tasks";
import { MinusIcon, PlusIcon } from "lucide-react";

export function TaskCard({
  task,
  updateTaskPoints,
}: {
  task: Task;
  updateTaskPoints: (task: Task, points: number) => void;
}) {
  const points = task.points || 0;

  return (
    <div className="m-2 w-60 rounded-lg border border-gray-300 bg-gray-50 px-2">
      <div className="py-2">{task.title}</div>
      <div className="flex justify-between gap-4 py-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>{task.id}</span>
          <span>{task.priority}</span>
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
        <div className="flex items-center gap-1">
          <button onClick={() => updateTaskPoints(task, points - 1)}>
            <MinusIcon className="size-3" />
          </button>
          <span className="font-bold">{points}</span>
          <button onClick={() => updateTaskPoints(task, points + 1)}>
            <PlusIcon className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
