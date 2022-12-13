import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../todoContext";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
