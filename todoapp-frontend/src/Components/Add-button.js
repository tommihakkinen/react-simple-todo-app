import React, { useState } from "react";
import icon from "./plus-solid.svg";
import DropDown from "./DropDown.js";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const url = "http://localhost:8080/api";
const url = "https://tamk-4a00ez62-3001-group03.herokuapp.com/api";

const AddButton = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [titleInput, setTitle] = useState("");
  const [descInput, setDesc] = useState("");
  const [prioInput, setPrio] = useState("");

  const submitTask = async (event) => {
    const newTask = {
      name: titleInput,
      description: descInput,
      priority: prioInput,
    };

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    event.preventDefault();
  };

  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleSelect = (index) => {
    setPrio(index);
  };

  return (
    <div>
      <Button>
        <img src={icon} alt="add-icon" id="Popover1" type="button" />
      </Button>
      <Popover
        placement="right"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>Add new task</PopoverHeader>
        <PopoverBody>
          <form onSubmit={submitTask}>
            <label for="title">
              Title:
              <br></br>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <br></br>
            <label for="description">
              Description:
              <br></br>
              <input
                type="text"
                id="description"
                value={descInput}
                onChange={(event) => setDesc(event.target.value)}
              />
            </label>
            <br></br>
            <br></br>
            <DropDown
              handleSelect={handleSelect}
              priority={prioInput}
            ></DropDown>
            <br></br>
            <br></br>
            <input type="submit" value="Submit"></input>
          </form>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default AddButton;
