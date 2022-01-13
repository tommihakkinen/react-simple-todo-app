import React from "react";
import trashicon from "./trashcan.svg";
import { Button } from "reactstrap";
import Filter from "./Filters.js";
import Sort from "./Sorting.js";

const url = "https://tamk-4a00ez62-3001-group03.herokuapp.com/api/";
// const url = "http://localhost:8080/api/";

export default class ListTasks extends React.Component {
  state = {
    loading: true,
    task: null,
    filter: null,
    sort: "Created",
  };

  async componentDidMount() {
    if (this.state.filter !== null) {
      const response = await fetch(url + `?prio=${this.state.filter}`);
      const data = await response.json();
      if (this.state.sort === "Last Created") {
        data.sort((a, b) => {
          return b.id - a.id;
        });
      }
      this.setState({ task: data, loading: false });
    } else {
      const response = await fetch(url);
      const data = await response.json();
      if (this.state.sort === "Priority") {
        data.sort((a, b) => {
          return a.priority - b.priority;
        });
      }
      if (this.state.sort === "Last Created") {
        data.sort((a, b) => {
          return b.id - a.id;
        });
      }
      this.setState({ task: data, loading: false });
    }
  }

  async handleDelete(id) {
    try {
      const response = await fetch(url + id, {
        method: "DELETE",
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    this.componentDidMount();
  }

  handleFilter = async (index) => {
    await this.setState({ filter: index });
    this.componentDidMount();
  };

  handleSort = async (sortBy) => {
    await this.setState({ sort: sortBy });
    this.componentDidMount();
  };

  render() {
    if (this.state.loading) {
      return (
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    if (!this.state.task) {
      return <div>didn't get a task</div>;
    }

    return (
      <div className="Task-Items">
        <div class="filter-sort">
          <Filter
            handleSelect={this.handleFilter}
            filter={this.state.filter}
          ></Filter>
          <Sort handleSelect={this.handleSort} sort={this.state.sort}></Sort>
        </div>
        <ul>
          {this.state.task.map((obj) => {
            var taskName = obj.name;
            var taskDesc = obj.description;
            var taskPrio = obj.priority;
            return (
              <div class="container">
                <button
                  value={obj.id}
                  type="button"
                  class="btn btn-primary"
                  data-toggle="collapse"
                  data-target="#Demo"
                >
                  {taskName}
                  <div class="priority-position">{taskPrio}</div>
                </button>
                <div id="Demo" class="collapse">
                  <input
                    class="desc-container"
                    name="completed"
                    type="checkbox"
                    // defaultChecked={obj.is_done}
                  />
                  <label class="toggle" for="toggle">
                    {taskDesc}
                  </label>
                  <Button
                    id="delete-button"
                    onClick={() => this.handleDelete(obj.id)}
                  >
                    <img src={trashicon} alt="delete-icon" />
                  </Button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
