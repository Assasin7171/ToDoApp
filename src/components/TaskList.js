import React from "react";
import Task from "./Task";

function TaskList(props) {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);

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
        <h1>Zadania do zrobienia</h1>
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
