import PropTypes from "prop-types";
import React from "react";
import { FormCheckbox } from "../forms";

/**
 * @param {TasksItem.propTypes} props
 * @returns {JSX.Element}
 */
const TasksItem = (props) => {
  const { task, updateTask } = props;
  return (
    <li>
      <label htmlFor={task.id} className="tasks-item form-group">
        <span>{task.title}</span>

        <FormCheckbox
          id={task.id}
          checked={task.isCompleted}
          onChange={(e) => updateTask(e.target.checked)}
        />
      </label>
    </li>
  );
};

TasksItem.propTypes = {
  /** @type {import('../../app/data').Task} */
  task: PropTypes.object,
  /** @type {(isCompleted: boolean) => {}} */
  updateTask: PropTypes.func,
};

export default TasksItem;
