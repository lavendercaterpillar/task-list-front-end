import { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: '',
    description: '',
  });

  // two event handlers that can be combined into a single event handler
  // const handleTitleChange = (event) => {
  // setFormFields({
  // ...formFields,
  // title: event.target.value,
  // })
  // };

  // const handleDescriptionChange = (event) => {
  // setFormFields({
  // ...formFields,
  // description: event.target.value,
  // })
  // };

  const handleChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onTaskAdd({
      titleData: formFields.title,
      descriptionData: formFields.description
    });

    setFormFields({ title: '', description: '' });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formFields.title}
          onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          name="description"
          value={formFields.description}
          onChange={handleChange} />
      </div>
      <input
        type="submit"
        value="Add Task" />
    </form>
  );
};

NewTaskForm.propTypes = {
  onTaskAdd: PropTypes.func.isRequired,
};

export default NewTaskForm;
