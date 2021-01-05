import React from "react";
import Todo from "./Todo";

export default function TodoList({ search, handleOnDelete }) {
  return (
    <div>
      {search.map((note) => (
        <Todo
          key={note.note}
          note={note.note}
          handleOnDelete={handleOnDelete}
        />
      ))}
    </div>
  );
}
