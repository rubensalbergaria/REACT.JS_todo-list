import './App.css';
import React, {useState} from "react";
import Task from "./Components/Task";

function App() {

  const [taskName, setTaskName] = useState('');
  const [time, setTime] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () =>{
    setTaskList([...taskList, {task: taskName, time: time }])
    setTaskName('');
    setTime('');
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <label>Task Name:</label>
      <input 
        type="text"    
        onChange = {(event)=>{
          setTaskName(event.target.value)
      }}
      />
      <label>Time:</label>
        <input 
        type="text"
        onChange={(event)=>{
          setTime(event.target.value)
      }}
      />
      <button
        onClick={addTask}
      >Add
      </button>      
        {
          taskList.map((task) =>{
            return <Task taskName={task.task} time={task.time}/>
          })
        }     

      
    </div>
  );
}

export default App;
