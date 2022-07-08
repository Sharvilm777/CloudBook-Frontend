import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import Note from "./Note";

const Home = (props) => {
  const [alert, setalert] = useState({
    message: "",
    alertType: "",
  });
  const showAlert = (message, alertType) => {
    setalert({
      message: message,
      alertType: alertType,
    });
    setTimeout(() => {
      setalert({
        message: "",
        alertType: "",
      });
    }, 2500);
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="container ">
        <Note showAlert={showAlert} />
      </div>
    </>
  );
};

export default Home;
