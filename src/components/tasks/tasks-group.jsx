import PropTypes from "prop-types";
import React from "react";
import { FormCheckbox } from "../forms";
import TasksItem from "./tasks-item";

/**
 * @param {TasksGroup.propTypes} props
 * @returns {JSX.Element}
 */
export const TasksGroup = (props) => {
  const { taskGroup, updateTask, updateTaskGroup } = props;

  const isCompleted =
    Array.isArray(taskGroup.tasks) || taskGroup.tasks?.length
      ? taskGroup.tasks.every((task) => task.isCompleted === true)
      : false;

  return (
    <li className="tasks-group">
      <label className="tasks-group-item form-group" htmlFor={taskGroup.id}>
        <span>{taskGroup.title}</span>

        <FormCheckbox
          id={taskGroup.id}
          checked={isCompleted}
          onChange={(e) => updateTaskGroup(e.target.checked)}
        />
      </label>

      <div className="tasks-divider"></div>

      {taskGroup.tasks.length > 0 && (
        <ul className="task-group-list">
          {taskGroup.tasks.map((task) => (
            <TasksItem
              task={task}
              key={task.id}
              updateTask={(isCompleted) => updateTask(task.id, isCompleted)}
            />
          ))}
        </ul>
      )}

      <div className="tasks-divider"></div>
    </li>
  );
};

TasksGroup.propTypes = {
  /** @type {import('../../app/data').TaskGroup} */
  taskGroup: PropTypes.object,
  /** @type {(taskId, isCompleted: boolean) => {}} */
  updateTask: PropTypes.func,
  /** @type {(isCompleted: boolean) => {}} */
  updateTaskGroup: PropTypes.func,
};
