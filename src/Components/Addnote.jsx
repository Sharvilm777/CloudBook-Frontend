import React, { useState, useContext } from "react";
import noteContext from "../Context/noteContext";

const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addnote } = context;
  const [note, setNote] = useState({ title: "", body: "", tag: "" });
  const onhandle = (e) => {
    e.preventDefault();
    addnote(note.title, note.body, note.tag);
    setNote({ title: "", body: "", tag: "" });
    props.showAlert("Note Added Successfully", "success");
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3>Add your note here</h3>
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
            name="title"
            onChange={onchange}
            value={note.title}
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
            name="tag"
            value={note.tag}
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
            rows="5"
            name="body"
            value={note.body}
            onChange={onchange}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" onClick={onhandle}>
          Add Note
        </button>
      </form>
    </>
  );
};

export default Addnote;
