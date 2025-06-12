import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  const handleUpdateClick = () => {
    props.onUpdate(props.id);
  };

  const handleDeleteClick = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={handleUpdateClick}
      >
        {props.title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={handleDeleteClick}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;