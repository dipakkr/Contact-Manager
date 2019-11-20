import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: ""
  });

  const { email, pass } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Fire the Login context function
    console.log("Login Submit");
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
          name="pass"
          placeholder="Password"
          type="text"
          value={pass}
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
