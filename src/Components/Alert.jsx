import React from "react";

function Alert(props) {
  return (
    <div>
      <div class={`alert alert-${props.alert.alertType}`} role="alert">
        {props.alert.message}
      </div>
    </div>
  );
}

export default Alert;
