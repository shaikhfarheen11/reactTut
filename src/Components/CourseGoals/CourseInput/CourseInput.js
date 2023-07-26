import React, { useState } from 'react';
import Button from '../../UI/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    const inputValue = event.target.value.trim();
    setEnteredValue(inputValue);
    setIsValid(inputValue !== '');
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" disabled={!isValid}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
