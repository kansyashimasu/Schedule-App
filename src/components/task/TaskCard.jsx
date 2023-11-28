import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ taskCardList, setTaskCardList, cardList, index }) => {
  const [inputText, setInputText] = useState(""); //input情報の格納
  const [taskList, setTaskList] = useState([]); //input情報を配列で格納

  return (
    <Draggable draggableId={cardList.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteButton"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
              cardList={cardList}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

// taskAddInputを作成しよう
