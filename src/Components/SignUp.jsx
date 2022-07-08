import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();
  const [userDetails, setDetails] = useState({
    Name: " ",
    email: "",
    password: "",
    Confirmpassword: "",
  });
  const submitForm = async (e) => {
    e.preventDefault();
    if (userDetails.password === userDetails.Confirmpassword) {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userDetails.Name,
          email: userDetails.email,
          password: userDetails.password,
        }),
      });
      let data = await response.json();
      console.log(data);
      if (data.success === "true") {
        localStorage.setItem("Token", data.authToken);
        history.push("/");
      } else {
        alert("Please Login!\n" + data.error);
      }
    } else {
      alert("Your passwords are different,Please enter same password");
    }
  };
  const onchange = (e) => {
    setDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div class="form-group my-2">
          <label for="name">Name</label>
          <input
            type="name"
            class="form-control"
            id="name"
            name="Name"
            aria-describedby="nameHelp"
            placeholder="Enter your Name"
            onChange={onchange}
            value={userDetails.Name}
          />
        </div>
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
            value={userDetails.email}
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
            value={userDetails.password}
          />
        </div>
        <div class="form-group my-2">
          <label for="password">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmpassword"
            name="Confirmpassword"
            placeholder="Confrim Password"
            onChange={onchange}
            value={userDetails.Confirmpassword}
          />
        </div>
        <button type="submit" class="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
