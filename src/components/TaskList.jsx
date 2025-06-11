import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

/* Why we have curely bracket here? props is tasks here; and how is commenting*/
const TaskList = ({ tasks }) => {  
  const getTaskListJSX = (tasks) => { 
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete} /* This is HTML thats why we need to put this comment in {} */
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};



const TaskList = ({ tasks }) => {
  return (
    <ul className="tasks__list no-bullet">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
        />
      ))}
    </ul>
  );
};



TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TaskList;
