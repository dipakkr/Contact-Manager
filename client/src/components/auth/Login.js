import React, { useState, useEffect, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, isAuthenticated, error, clearErrors } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    console.log(error);
  }, [isAuthenticated, error, props.history]);

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Fire the Login context function
    if (email === "" || password === "") {
      setAlert("Email and Password are mandatory*");
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary"> Login </span>
      </h1>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="text"
          value={password}
          onChange={onChange}
        />

        <input
          name="Login"
          type="submit"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
