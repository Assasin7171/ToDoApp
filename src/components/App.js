import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "skończyć niektóre gry !",
        date: "2024-02-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "umyć podłogę",
        date: "2024-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    //
    //Zrobione metodą splice.
    //
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);

    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // });

    //
    //zrobione metodą filter
    //
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("done elementu o id " + id);

    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  addTaskToList = (text, important, date) => {
    let tasks = [...this.state.tasks];
    if (text.length > 0) {
      tasks.push({
        id: this.state.tasks.length,
        text: text,
        date: date,
        important: important,
        active: true,
        finishDate: null,
      });
      this.setState({
        tasks,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <AddTask addTaskToList={this.addTaskToList} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </div>
    );
  }
}
