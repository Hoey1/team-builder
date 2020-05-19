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
              // onChange={}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
