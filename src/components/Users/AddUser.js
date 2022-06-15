import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterdUsername, setEnteredUsername] = useState("");
  const [enterdAge, setEnteredAge] = useState("");

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangehandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const adduserHandler = (event) => {
    event.preventDefault();

    if(enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      return;
    }
    if(+enterdAge<1){
      return;
    }
    console.log(enterdUsername, enterdAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
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
  );
};

export default AddUser;
