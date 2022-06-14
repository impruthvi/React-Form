import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const adduserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={adduserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" id="" />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
