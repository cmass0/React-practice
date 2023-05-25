import "./App.css";
import Adduser from "./components/Adduser/Adduser";

import UserList from "./components/UserList/UserList";
import React, { useState } from "react";

function App() {
  const [Userdata, setUserdata] = useState([{}]);

  const addData = (e) => {
    setUserdata((prev) => {
      const updateUser = [...prev];
      updateUser.unshift({
        name: e.name,
        age: e.age,
        id: Math.random().toString(),
      });
      return updateUser;
    });
    console.log(e.name, e.age);
  };

  return (
    <div>
      <section id="User-form">
        <Adduser addData={addData}></Adduser>
      </section>
      <section>
        <UserList item={Userdata}></UserList>
      </section>
    </div>
  );
}

export default App;
