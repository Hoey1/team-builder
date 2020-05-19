import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

// Shape of object
const initialTeamList = [
  {
    name: "Joey",
    email: "joey@xm8.ninja",
    role: "Full Stack Engineer",
  },
];

// Give State default value
const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [team, setTeam] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <header>
        <h1>Team List</h1>
      </header>

      <Form name={formValues} />
    </div>
  );
}

export default App;
