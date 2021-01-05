import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Empty from "./components/Empty";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([
    { note: "There should be a note here..." },
  ]);
  const [note, setNote] = useState("");
  const [text, setText] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setData([...data, { note: note }]);
    setNote("");
  };

  const handleOnDelete = (note) => {
    const remove = data.filter((item) => item.note !== note);
    setData(remove);
  };

  const search = data.filter((item) =>
    item.note.toLocaleLowerCase().includes(text.toLocaleLowerCase())
  );
  return (
    <React.Fragment>
      <NavBar />
      <Search text={text} setText={setText} />
      {search.length === 0 && <NotFound />}
      {data.length === 0 && <Empty />}
      <TodoForm note={note} setNote={setNote} handleOnSubmit={handleOnSubmit} />

      <TodoList
        search={search}
        text={text}
        setText={setText}
        handleOnDelete={handleOnDelete}
      />
      <Footer />
    </React.Fragment>
  );
}

export default App;
