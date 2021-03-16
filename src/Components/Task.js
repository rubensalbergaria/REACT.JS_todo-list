import React from "react";

export default function Task ( {taskName, time } ){
  return (
    <div className="task">
      <h1>Task name: {taskName}</h1>
      <h1>Time to complete: {time}</h1>
    </div>
  )
}