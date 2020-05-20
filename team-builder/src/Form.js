import React from "react";

export default function Form(props) {
  const { values, onInputChange, onSubmit } = props;

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a Teammate</h2>
        <button>Submit</button>
      </div>

      <div className="form-group inputs">
        <h4>Team Information</h4>

        <label>
          Name:&nbsp;
          <input
            type="text"
            placeholder="Type a Teammate Name"
            maxLength="20"
            name="teammate"
            value={values.teammate}
            onChange={onInputChange}
          />
        </label>

        <label>
          Email:&nbsp;
          <input
            type="text"
            placeholder="Type email"
            maxLength="25"
            name="email"
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>
          Role:&nbsp;
          <select name="role" value={values.role} onChange={onInputChange}>
            <option value="">Select a Role</option>
            <option value="HR">HR</option>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Intern">Intern</option>
          </select>
        </label>
      </div>
    </form>
  );
}
