import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./note.css";
const Note = (props) => {
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn">
          <DeleteOutlineIcon
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
