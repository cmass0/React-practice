import React, { useState } from "react";
import "./Adduser.css";
import ErrorModal from "../Modal/ErrorModal";

function Adduser(props) {
  const [enteredvalue, setenteredvalue] = useState([
    { name: "", age: 0, id: "" },
  ]);
  const [enteredname, setenteredname] = useState("");
  const [enteredage, setenteredage] = useState("");
  const [error, seterror] = useState();

  const UserNameinput = (e) => {
    setenteredvalue((prevname) => {
      return {
        ...prevname,
        name: e.target.value,
      };
    });
    setenteredname(e.target.value);
  };

  const UserAgeinput = (e) => {
    setenteredvalue((prevage) => {
      return { ...prevage, age: e.target.value };
    });
    setenteredage(e.target.value);
  };

  const formSubmitHD = (e) => {
    e.preventDefault();
    setenteredage("");
    setenteredname("");
    if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredage < 1) {
      seterror({
        title: "Invalid input",
        message: "Please enter a valid age(age > 0)",
      });
      return;
    }

    props.addData(enteredvalue);
    console.log(enteredvalue.name, enteredvalue.age);
  };
  const errorReset = (e) => {
    seterror(null);
  };

  return (
    <div>
      <div>
        <form onSubmit={formSubmitHD} className="user-form">
          <div className="label">Username</div>
          <input onChange={UserNameinput} value={enteredname}></input>
          <div className="label">Age(Years)</div>
          <input
            type="number"
            onChange={UserAgeinput}
            value={enteredage}
          ></input>
          <div>
            <button type="submit">Add user</button>
          </div>
        </form>
      </div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onReset={errorReset}
        />
      )}
    </div>
  );
}

export default Adduser;
