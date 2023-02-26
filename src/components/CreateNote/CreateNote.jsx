import React, { useState } from "react";
import "./createNote.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputChange = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;

    // object destructuring
    const { name, value } = e.target;

    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  const expandBox = () => {
    setExpand(true);
  };
  return (
    <>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="title"
              className="input"
              autoComplete="off"
              value={note.title}
              name="title"
              onChange={InputChange}
            />
          ) : null}

          <textarea
            placeholder="enter a note..."
            value={note.content}
            onChange={InputChange}
            name="content"
            onClick={expandBox}
          />

          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon
                className="plus"
                style={{
                  fontSize: 45,
                  fontWeight: 900,
                  color: "gold",
                  cursor: "pointer",
                  background: "transparent",
                  position: "absolute",
                  left: 400,
                  bottom: -28,
                  width: 60,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "white",
                }}
              />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
