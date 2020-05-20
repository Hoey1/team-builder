import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

// Shape of object
const initialTeamList = [
  {
    teammate: "Joey",
    email: "joey@xm8.ninja",
    role: "Full Stack Engineer",
  },
];

// Give State default value
const initialFormValues = {
  teammate: "",
  email: "",
  role: "",
};

export default function App() {
  const [team, setTeam] = useState(initialTeamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (evt) => {
    const { teammate } = evt.target;
    const { value } = evt.target;
    setFormValues({ ...formValues, [teammate]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (
      !formValues.teammate.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ) {
      return;
    }

    return (
      <div className="App">
        <header>
          <h1>Team List</h1>
        </header>

        <Form
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  };
}
