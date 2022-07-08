import React from "react";

import Addnote from "./Addnote";
import Displaynotes from "./Displaynotes";

const Note = (props) => {
  const { showAlert } = props;
  return (
    <div>
      <Addnote showAlert={showAlert} />
      <Displaynotes showAlert={showAlert} />
    </div>
  );
};

export default Note;
