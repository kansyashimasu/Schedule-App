import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./button/AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// リファクタリング
const reorder = (taskCardList, startIndex, endIndex) => {
  // sourceはスタート位置
  const remove = taskCardList.splice(startIndex, 1); //[2,3]
  // destinationはドラッグを終えた位置
  taskCardList.splice(endIndex, 0, remove[0]); //[2,1,3]
};

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  //ドラッグを終えたら
  const handleDragEnd = (result) => {
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskCardList.map((cardList, index) => (
              <TaskCard
                key={cardList.id}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
                cardList={cardList}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;

// デプロイしてみよう
