/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} title
 * @property {boolean} isCompleted
 */

/**
 * @typedef {Object} TaskGroup
 * @property {string} id
 * @property {string} title
 * @property {Task[]} tasks
 */

/** @type {TaskGroup[]} */
export const taskGroups = [
  {
    id: `G#1`,
    title: "All Pages",
    tasks: [
      { id: `#1`, title: "Page 1", isCompleted: false },
      { id: `#2`, title: "Page 2", isCompleted: false },
      { id: `#3`, title: "Page 3", isCompleted: false },
      { id: `#4`, title: "Page 4", isCompleted: false },
      { id: `#5`, title: "Page 5", isCompleted: false },
      { id: `#6`, title: "Page 6", isCompleted: false },
      { id: `#7`, title: "Page 7", isCompleted: false },
    ],
  },
];
