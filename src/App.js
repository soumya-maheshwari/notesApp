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
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
