import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, taskList, setTaskList, index }) => {
  // ゴミ箱をクリックしたらクリックした要素を削除
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;

// drag&drop後にカードを並び変えよう
