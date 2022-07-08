import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  let url = "http://localhost:5000";
  let notesIntial = [];
  const [notes, setnotes] = useState(notesIntial);
  let getnotes = async () => {
    const response = await fetch(url + "/api/notes/getnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
    });
    let data = await response.json();
    console.log(data);
    setnotes(Array.from(data));
  };

  const addnote = async (title, desc, tag) => {
    //API call to add a note to db
    const response = await fetch(url + "/api/notes/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
      body: JSON.stringify({ title, body: desc, tag }),
    });
    const json = await response.json();

    let newNote = {
      _id: json._id,
      user: "616d664efd6d5f51e62f7bed",
      title: title,
      body: desc,
      tag: tag,
      timeStamp: new Date(),
      __v: 0,
    };
    setnotes(notes.concat(newNote));
  };
  const editnote = async (id, title, desc, tag) => {
    const response = await fetch(url + `/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
      body: JSON.stringify({ title, body: desc, tag }),
    });
    const json = await response.json();
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].body = desc;
        newNote[index].tag = tag;
        console.log(newNote[index]);
        break;
      }
    }
    setnotes(newNote);
  };
  const deletenote = async (notesId) => {
    //API call to delete a note with the id in DB
    const response = await fetch(url + `/api/notes/deletenote/${notesId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Token"),
      },
    });
    const json = await response.json();
    console.log("Deleting notes with id " + notesId);
    const newNote = notes.filter((notes) => {
      return notes._id !== notesId;
    });
    setnotes(newNote);
  };
  return (
    <noteContext.Provider
      value={{ notes, addnote, getnotes, deletenote, editnote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
