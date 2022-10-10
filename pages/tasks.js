import React, { useEffect, useState } from "react";
import { getTasks } from "../src/taskController";

function Tasks() {
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    getTasks().then((task) => {
      setTasks(task);
    });
  }, []);

  return (
    <div>
      <p>Tasks</p>
      {tasks &&
        tasks.map((task) => (
          <div key={task.uuid}>
            <p>UUID: {task.uuid}</p>
            <p>Name: {task.name}</p>
            <p>Title: {task.title}</p>
          </div>
        ))}
    </div>
  );
}

export default Tasks;
