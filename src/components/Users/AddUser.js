import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterdUsername, setEnteredUsername] = useState("");
  const [enterdAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const adduserHandler = (event) => {
    event.preventDefault();

    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: 'Invalid Inpute',
        message: 'Please enter a valid age and name(non-empty value).'
      })
      return;

    }
    if (+enterdAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age(>0).'
      })
      return;
    }
    // console.log(enterdUsername, enterdAge);
    props.onAddUser(enterdUsername, enterdAge);
    setEnteredAge("");
    setEnteredUsername("");

  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={adduserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id=""
            value={enterdUsername}
            onChange={usernameChangehandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id=""
            value={enterdAge}
            onChange={ageChangehandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
