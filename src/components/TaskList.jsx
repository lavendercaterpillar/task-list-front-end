import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

// Props now are tasks and onComplete
const TaskList = ({ tasks , onComplete ,onDelete}) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  //add event handler
  onComplete: PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired,
};

export default TaskList;
