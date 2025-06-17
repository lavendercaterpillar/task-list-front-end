import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const kBaseUrl = 'http://localhost:5000';

const getAllTaskApi = () => {
  return axios.get(`${kBaseUrl}/tasks`)
    .then(response => {
      return response.taskData.map(convertFromApi)
    })
    .catch( error => {
      console.log(error);
    });
};

const convertFromApi = (apiTask) => {
  const { id, title, description, completed_at } = apiTask;
  const newTask = { id, title, description, completedAt: completed_at };
  return newTask;
};

function App() {
  const [taskData, setTaskData] = useState([
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ]);

  const updateTask = (id) => {
    setTaskData(tasks => {
      return tasks.map(task => { //create new list and new task 
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task; //use directly in the new list
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTaskData(task => {
      return task.filter(task => task.id !== id);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <TaskList tasks={taskData} onUpdate={updateTask} onDelete={deleteTask} />
      </main>
    </div>
  );
};

export default App;