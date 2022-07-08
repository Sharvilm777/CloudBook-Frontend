import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/noteContext";
import Notesitem from "./Notesitem";

const Displaynotes = (props) => {
  const { showAlert } = props;
  const ref = useRef(null);
  const refClose = useRef(null);
  const context = useContext(noteContext);
  const { notes, getnotes, editnote } = context;
  useEffect(() => {
    getnotes();
    // eslint-disable-next-line
  }, []);
  const [Note, setNote] = useState({
    id: "",
    etitle: "",
    ebody: "",
    etag: "general",
  });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      ebody: currentNote.body,
      etag: currentNote.tag,
    });
  };
  const onhandle = (e) => {
    e.preventDefault();
    editnote(Note.id, Note.etitle, Note.ebody, Note.etag);
    ref.current.click();
    props.showAlert("Note Edited Successfully", "success");
  };
  const onchange = (e) => {
    setNote({ ...Note, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-3 row">
      <h3>Your notes are here</h3>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
        ref={ref}
      >
        launch modal
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    name="etitle"
                    value={Note.etitle}
                    onChange={onchange}
                  />
                </div>
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="tag"
                    aria-describedby="tag"
                    name="etag"
                    value={Note.etag}
                    onChange={onchange}
                  />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    name="ebody"
                    value={Note.ebody}
                    onChange={onchange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                ref={refClose}
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={onhandle} class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {notes.map((note) => {
        return (
          <>
            <Notesitem
              key={note._id}
              note={note}
              updateNote={updateNote}
              showAlert={showAlert}
            />
          </>
        );
      })}
    </div>
  );
};

export default Displaynotes;
