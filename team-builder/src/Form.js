import React from "react";

export default function Form(props) {
  const { name, email, role } = props;

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a Friend</h2>
        <button>submit</button>

        <div className="form-group inputs">
          <h4>Team information</h4>

          <label>
            Name:&nbsp;
            <input
              type="text"
              placeholder="Type a Teammates Name"
              maxLength="20"
              name="teammate"
              value={name.teammate}
              onChange={onInputChange}
            />
          </label>

          <label>
            Email:&nbsp;
            <input
              type="text"
              placeholder="Type an Email"
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
              <option value="Front End Engineer">Front End Engineer</option>
              <option value="Back End Engineer">Back End Engineer</option>
              <option value="Full Stack Engineer">Full Stack Engineer</option>
              <option value="Intern">Intern</option>
            </select>
          </label>
        </div>
      </div>
    </form>
  );
}
