import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Name and Age(non-empty)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Age(>0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={enteredName}
            onChange={enteredNameHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={enteredAgeHandler}
          ></input>
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
