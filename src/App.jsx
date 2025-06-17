import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import DATA from './data.json';

const kBaseUrl = 'http://127.0.0.1:5000';

const getAllTaskApi = () => {
  return axios.get(`${kBaseUrl}/tasks`)
    .then(response => {
      return response.data.map(convertFromApi);
    })
    .catch(error => {
      console.log(error);
    });
};

const convertFromApi = (apiTask) => {
  const { id, title, description, completed_at: completedAt } = apiTask;
  const newTask = { id, title, description, completedAt };
  return newTask;
};

const toggleTaskApi = (id, completedAt) => {
  let taskStatusUrl;
  if (completedAt) {
    taskStatusUrl = `${kBaseUrl}/tasks/${id}/mark_incomplete`;
  } else {
    taskStatusUrl = `${kBaseUrl}/tasks/${id}/mark_complete`;
  }

  return axios.patch(taskStatusUrl)
    .then(response => {
      return convertFromApi(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

const deleteTaskApi = (id) => {
  return axios.delete(`${kBaseUrl}/tasks/${id}`)
    .catch(error => {
      console.log(error);
    });
};

function App() {
  const [taskData, setTaskData] = useState([]);

  const getAllTasks = () => {
    return getAllTaskApi()
      .then(tasks => setTaskData(tasks));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const updateTask = (id, completedAt) => {
    return toggleTaskApi(id, completedAt)
      .then(updatedTask => {
        setTaskData(tasks =>
          tasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
      });
  };

  const deleteTask = (id) => {
    return deleteTaskApi(id)
      .then(() => {
        setTaskData(tasks => tasks.filter(task => task.id !== id));
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <TaskList
          tasks={taskData}
          onUpdate={updateTask}
          onDelete={deleteTask}
        />
      </main>
    </div>
  );
};

export default App;