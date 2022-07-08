import React, { useContext } from "react";
import noteContext from "../Context/noteContext";

const Notesitem = (props) => {
  const context = useContext(noteContext);
  const { deletenote } = context;
  let { note, updateNote, showAlert } = props;

  return (
    <div className="col-md-4 my-2">
      <div class="card">
        <div class="card-body">
          <div className="d-flex justify-content-between">
            <h5 class="card-title">{note.title}</h5>
            <span
              style={{
                background: "black",
                height: "22px",
                fontSize: "13px",
                borderRadius: "18%",
                width: "57px",
                position: "absolute",
                top: "6px",
                right: "5px",
                textAlign: "center",
                color: "white",
              }}
            >
              {note.tag}
            </span>
          </div>
          <p class="card-text">{note.body}</p>

          <i
            class="fas fa-trash fa-lg"
            onClick={() => {
              deletenote(note._id);
              showAlert("Note Deleted successfully", "success");
            }}
          ></i>

          <i
            class="far fa-edit mx-3 fa-lg"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Notesitem;
