import React from "react";
import "./Form.css";
import { useEffect } from "react";

function Form(props) {
  const { setFormValues, memberToEdit, onSubmit, onChangeText, values } = props;

  useEffect(() => {
    if (memberToEdit) {
      setFormValues({
        name: memberToEdit.name,
        email: memberToEdit.email,
        role: memberToEdit.role,
      });
    }
  }, [memberToEdit]);

  return (
    <div className="member-form">
      <div className="member-info">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onChangeText}
        />
      </div>
      <div className="member-info">
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={onChangeText}
        />
      </div>
      <div className="member-info">
        <label>Role: </label>
        <select
          onChange={onChangeText}
          name="role"
          value={values.role}
          onChange={onChangeText}
        >
          <option value="">Select a Role</option>
          <option value="HR">HR</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Intern">Intern</option>
        </select>
      </div>
      <div className="member-info-btn">
        <button onClick={onSubmit}>Add Member</button>
      </div>
    </div>
  );
}

export default Form;
