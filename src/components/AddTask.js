import React, { Component } from "react";
import "./AddTask.css";

export default class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    important: false,
    date: this.minDate,
  };

  handleChange = (e) => {
    // console.log(e.target.type);

    if (e.target.type === "text") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        important: e.target.checked,
      });
    } else if (e.target.type === "date") {
      this.setState({
        date: e.target.value,
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    const { text, important, date } = this.state;

    return (
      <div className="form">
        <p>
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="wpisz nazwę zadania"
            onChange={this.handleChange}
          />
          <label>
            <input
              type="checkbox"
              checked={this.state.important}
              name="isImportant"
              onChange={this.handleChange}
            />
            Ważne
          </label>
        </p>
        <p>
          <span>Do kiedy zrobić</span>
          <input
            type="date"
            name="date"
            id=""
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleChange}
          />
        </p>
        <button
          onClick={() => {
            this.props.addTaskToList(text, important, date);
            this.setState({
              text: "",
              important: false,
              date: this.minDate,
            });
          }}
        >
          Dodaj
        </button>
      </div>
    );
  }
}
