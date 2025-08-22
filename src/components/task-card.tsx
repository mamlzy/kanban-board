import { useState } from "react";
import type { Task } from "../utils/data-tasks";
import { MinusIcon, PlusIcon } from "lucide-react";

export function TaskCard({
  task,
  updateTask,
}: {
  task: Task;
  updateTask: (task: Task) => void;
}) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const points = task.points || 0;

  const updatePoints = (newPoints: number) => {
    if (newPoints < 0) return;

    updateTask({ ...task, points: newPoints });
  };

  return (
    <div className="m-2 w-60 rounded-lg border border-gray-300 bg-gray-50 px-2">
      <div className="py-2">
        {isEditingTitle ? (
          <input
            type="text"
            value={task.title}
            onChange={(e) => updateTask({ ...task, title: e.target.value })}
            onBlur={() => setIsEditingTitle(false)}
            autoFocus
          />
        ) : (
          <div onClick={() => setIsEditingTitle(true)}>{task.title}</div>
        )}
      </div>
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
          <button onClick={() => updatePoints(points - 1)}>
            <MinusIcon className="size-3" />
          </button>
          <span className="font-bold">{points}</span>
          <button onClick={() => updatePoints(points + 1)}>
            <PlusIcon className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
