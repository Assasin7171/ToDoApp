import React from "react";
import Task from "./Task";

function TaskList(props) {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);

  //sortowanie wykonanych tasków
  // done.sort((a, b) => b.finishDate - a.finishDate);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate < b.finishDate) {
        return -1;
      }
      return 0;
    });
  }
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a.text < b.text) {
        return -1;
      }
      if (a.text > b.text) {
        return 1;
      }
      return 0;
    });
  }

  const tasksActive = active.map((task) => (
    <Task
      deleteTask={props.deleteTask}
      changeTaskStatus={props.changeTaskStatus}
      key={task.id}
      task={task}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      deleteTask={props.deleteTask}
      changeTaskStatus={props.changeTaskStatus}
      key={task.id}
      task={task}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>Lista zadań</h1>
        {tasksActive.length > 0 ? (
          tasksActive
        ) : (
          <p>Wszystkie zadania wykonane</p>
        )}
      </div>

      <hr />

      <div className="done">
        <h3>
          Zadania ukończone <em>({done.length})</em>
        </h3>
        {doneTasks.slice(0, 5)}
        {done.length > 5 && (
          <span>wyświetlone jest jedynie 5 ostatnich wykonanych zadań</span>
        )}
      </div>
    </>
  );
}

export default TaskList;
