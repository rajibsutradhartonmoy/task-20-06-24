import React, { useState } from "react";
import { TasksList } from "../components/tasks";
import { taskGroups as taskGroupsData } from "./data";

const App = (props) => {
  const [taskGroups, setTaskGroups] = useState(taskGroupsData);

  const updateTask = (groupId, taskId, isCompleted) => {
    if (!groupId || !taskId) return;

    setTaskGroups((prev) => {
      const updates = [...prev];

      const groupIndex = updates.findIndex((group) => group.id === groupId);

      if (groupIndex === -1) return updates;

      const taskIndex = updates[groupIndex]?.tasks?.findIndex(
        (task) => task.id === taskId
      );

      if (taskIndex === -1) return updates;

      updates[groupIndex].tasks[taskIndex].isCompleted = isCompleted;

      return updates;
    });
  };

  const updateTaskGroup = (groupId, isCompleted) => {
    if (!groupId) return;

    setTaskGroups((prev) => {
      const updates = [...prev];

      const groupIndex = updates.findIndex((group) => group.id === groupId);

      if (groupIndex === -1) return updates;

      const updatedTasks = updates[groupIndex].tasks?.map((task) => ({
        ...task,
        isCompleted: !!isCompleted,
      }));

      updates[groupIndex].tasks = updatedTasks;

      return updates;
    });
  };

  return (
    <div className="container">
      <TasksList
        taskGroups={taskGroups}
        updateTask={updateTask}
        updateTaskGroup={updateTaskGroup}
      />
    </div>
  );
};

App.propTypes = {};

export default App;
