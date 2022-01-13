import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Priority {props.priority}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <div onClick={() => props.handleSelect(1)}>1</div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={() => props.handleSelect(2)}>2</div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={() => props.handleSelect(3)}>3</div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={() => props.handleSelect(4)}>4</div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={() => props.handleSelect(5)}>5</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
