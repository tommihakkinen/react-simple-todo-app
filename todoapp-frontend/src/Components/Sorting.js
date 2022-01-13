import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Sort = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Sort by: {props.sort}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <div onClick={() => props.handleSelect("Created")}>Created</div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={() => props.handleSelect("Last Created")}>
            Last Created
          </div>
        </DropdownItem>
        <DropdownItem>
          <div onClick={() => props.handleSelect("Priority")}>Priority</div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Sort;
