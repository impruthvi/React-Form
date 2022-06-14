import React from "react";

const AddUser = (props)=>{

    const adduserHandler = (event) =>{
        event.preventDefault();
    }
    return(
        <form onSubmit={adduserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="" />
            <label htmlFor="age">Age (Years)</label>
            <input type="number" name="age" id="" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddUser;