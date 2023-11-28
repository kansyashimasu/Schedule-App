import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// ローカルストレージ

const Tasks = ({ taskList, setTaskList }) => {
  // リファクタリング
  const reorder = (taskList, startIndex, endIndex) => {
    // sourceはスタート位置
    const remove = taskList.splice(startIndex, 1); //[2,3]
    // destinationはドラッグを終えた位置
    taskList.splice(endIndex, 0, remove[0]); //[2,1,3]
  };

  // ドラッグが完了したら
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {taskList.map((task, index) => (
              <div key={task.id}>
                <Task
                  index={index}
                  task={task}
                  taskList={taskList}
                  setTaskList={setTaskList}
                />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
