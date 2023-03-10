import './App.css';
import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const updateTask = (id, event) => {

    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, taskName: event.target.value};
        } else {
          return task;
        }
      })
    )
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id){
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newTodoList);
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    )
  }

  

  return (
    <div className="App">
     <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
     </div>
     <div className='list'>
      {todoList.map((task) => {
        return (
          <div style={{backgroundColor: task.completed ? "green" : "white"}}>
            <input onChange={(e) => updateTask(task.id, e)} placeholder={task.taskName} />            
            <button onClick={() => deleteTask(task.id)}> X </button>
            <button onClick={() => completeTask(task.id)}> Complete Task </button>
            {task.taskName}
          </div>
        );
      })}
     </div>
    </div>
  );
}

export default App;
