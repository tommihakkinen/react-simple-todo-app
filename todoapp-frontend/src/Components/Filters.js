import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Filter = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown
      style={{ left: "-7px" }}
      direction="left"
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle caret>Filter by Priority {props.filter}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <div onClick={() => props.handleSelect(null)}>No filter</div>
        </DropdownItem>
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

export default Filter;
