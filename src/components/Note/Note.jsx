import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./note.css";
const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon
            className="dlt"
            style={{
              width: 70,
              height: 40,
              color: "gold",
              borderRadius: 50,
              background: "transparent",
            }}
          />
        </button>
      </div>
    </>
  );
};

export default Note;
