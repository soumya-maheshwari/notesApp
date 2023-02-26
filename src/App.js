import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CreateNote from "./components/CreateNote/CreateNote";

import Note from "./components/Note/Note";
import { useState } from "react";
function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("i am clicked");

    setAddItem((prevState) => {
      return [...prevState, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((prevData) =>
      prevData.filter((currData, indx) => {
        return indx !== id;
      })
    );
    alert("Are you sure you want to delete the note");
  };
  return (
    <>
      <Navbar />
      <CreateNote passNote={addNote} />

      {/* <Note /> */}

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
