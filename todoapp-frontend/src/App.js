import React from "react";
import AddButton from "./Components/Add-button.js";
import "./App.css";
import ListTasks from "./Components/ListTasks.js";

function App() {
  return (
    <div className="App">
      <div className="taskBoxList">
        <ListTasks> </ListTasks>
      </div>

      <div className="button-container">
        <AddButton></AddButton>
      </div>
    </div>
  );
}

export default App;
