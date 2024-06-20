import PropTypes from "prop-types";
import React from "react";
import { TasksGroup } from "./tasks-group";

/**
 * @param {TasksList.propTypes} props
 * @returns {JSX.Element}
 */
export const TasksList = (props) => {
  const { taskGroups, updateTask, updateTaskGroup } = props;

  return (
    <div className="tasks-list">
      <ul>
        {taskGroups.map((taskGroup) => (
          <TasksGroup
            taskGroup={taskGroup}
            key={taskGroup.id}
            updateTaskGroup={(isCompleted) =>
              updateTaskGroup(taskGroup.id, isCompleted)
            }
            updateTask={(taskId, isCompleted) =>
              updateTask(taskGroup.id, taskId, isCompleted)
            }
          />
        ))}
      </ul>
      <div className="tasks-list-footer">
        <button className="tasks-list-btn">Done</button>
      </div>
    </div>
  );
};

TasksList.propTypes = {
  /** @type {import('../../app/data').TaskGroup[]} */
  taskGroups: PropTypes.arrayOf(PropTypes.object),
  /** @type {(groupId: string, taskId, isCompleted: boolean) => {}} */
  updateTask: PropTypes.func,
  /** @type {(groupId: string, isCompleted: boolean) => {}} */
  updateTaskGroup: PropTypes.func,
};
