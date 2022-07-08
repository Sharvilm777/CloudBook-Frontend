import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Form is submitting");
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });
    let data = await response.json();
    console.log(data);
    if (data.success === "true") {
      localStorage.setItem("Token", data.authToken);
      history.push("/");
    } else {
      alert("Login With Correct credentials");
    }
  };
  const onchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div class="form-group my-2">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onchange}
            value={Credentials.email}
          />
        </div>
        <div class="form-group my-2">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onchange}
            value={Credentials.password}
          />
        </div>
        <button type="submit" class="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
