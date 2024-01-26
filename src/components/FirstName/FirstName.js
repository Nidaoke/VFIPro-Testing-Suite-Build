import React from "react";

import classes from './FirstName.module.css';

export const FirstName = () => {

  const handleSubmit = function(e){
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.component223}>
        <div className={classes.rectangle}></div>
        <div className={classes.damola}>
          <label>
            Text input: <input name="myInput" defaultValue="Some initial value" />
          </label>
          <button type="submit">Submit</button>
        </div>
        <div className={classes.firstName}>Ask Question</div>
      </div>
    </form>
  );
};
