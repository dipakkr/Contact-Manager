import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, isAuthenticated, error, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    console.log(error);
    if (error === "User Already Exists") {
      setAlert(error, "danger");
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Fire the context function

    if (name === "" || email === "" || password === "") {
      setAlert("Please fill the information", "danger");
    } else if (password !== password2) {
      setAlert("Password doesn't match", "danger");
    } else {
      console.log("Register Submit");
      register({
        name,
        email,
        password
      });
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
          name="password"
          placeholder="Password"
          type="text"
          value={password}
          onChange={onChange}
          required
          minLength="6"
        />
        <input
          name="password2"
          placeholder="Cofirm Password"
          type="text"
          value={password2}
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
