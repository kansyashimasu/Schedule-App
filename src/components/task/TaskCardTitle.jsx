import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputTitle] = useState("today");

  // タイトルをクリックしたらinputを表示
  const handleClick = () => {
    setIsClick(true);
  };

  // inputに打ち込んだ値を取得
  const handleChange = (e) => {
    setInputTitle(e.target.value);
    // console.log(inputCardTitle);
  };

  // formの送信をしたらinputを閉じる
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlue = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input className="taskCardTitleInput"
            type="text"
            autoFocus
            onChange={handleChange}
            onBlur={handleBlue}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
