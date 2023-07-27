import React, { useState, useRef } from "react";
import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef(); 
  const ageInputRef = useRef();
  const collegeInputRef = useRef(); // Ref for the College Name input

  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value; // Get the college name from the ref

    // ... (validation checks)

    props.onAddUser(enteredName, enteredUserAge, enteredCollege); // Pass college name to onAddUser function

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = ''; // Clear the college name input

  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          {/* New input for College Name */}
          <label htmlFor="college">College Name</label>
          <input
            id="college"
            type="text"
            ref={collegeInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
