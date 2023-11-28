import React from "react";

const TaskCardDeleteButton = ({ taskCardList, setTaskCardList, cardList }) => {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardList(taskCardList.filter((task) => task.id !== id));
  };
  
  return (
    <div>
      <button className="taskCardDeleteButton">
        <i
          className="fa-solid fa-xmark"
          onClick={() => taskCardDeleteButton(cardList.id)}
        ></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;

// タスクカードを削除するボタンを作成しよう
