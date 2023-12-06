import React from "react";

function Task(props) {
  const importantStyle = {
    color: "red",
  };

  const { text, date, id, active, finishDate, important } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong> - do{" "}
          <span>{date}</span>
          <button onClick={() => props.changeTaskStatus(id)}>
            Zostało zrobione
          </button>
          <button onClick={() => props.deleteTask(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong> {text} </strong>
          (zrobić do {date})
          <br />
          kiedy wykonano: <span>{finish}</span>
          <button onClick={() => props.deleteTask(id)}>X</button>
        </p>
      </div>
    );
  }
}

export default Task;
