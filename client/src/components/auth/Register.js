import React, { useState } from "react";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
  const alertContext = React.useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    name: "",
    email: "",
    pass: "",
    pass2: ""
  });

  const { name, email, pass, pass2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Fire the context function

    if (name === "" || email === "" || pass === "") {
      setAlert("Please fill the information", "danger");
    } else if (pass !== pass2) {
      setAlert("Password doesn't match", "danger");
    } else {
      console.log("Register Submit");
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary"> Register </span>
      </h1>

      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={onChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="pass"
          placeholder="Password"
          type="text"
          value={pass}
          onChange={onChange}
          required
          minLength="6"
        />
        <input
          name="pass2"
          placeholder="Cofirm Password"
          type="text"
          value={pass2}
          onChange={onChange}
          required
          minLength="6"
        />

        <input
          name="Register"
          type="submit"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
