import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = ({lists, id}) => {

  // Construct dictionary to link ids to names
  const listDict = {};
  if (lists) {
    lists.forEach(element => {
      listDict[element.list_id] = element.name;
    });
  }

  // Get TodoItems from backend
  const [todos, setTodos] = useState([]);

  const getTodos = async(url) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      setTodos(jsonData)
      console.log("Fetched data");
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const url = id ? "http://localhost:5000/get-tasks/" + id : "http://localhost:5000/list-tasks";
    getTodos(url);
  },[id]);

  // Delete Item
  const deleteTodo = async id => {
    try {
      const url = "http://localhost:5000/delete-task/" + id;
      const response = fetch(url, {
        method: "DELETE",
      });

      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Complete Item
  const completeTodo = async id => {
    try {
      const url = "http://localhost:5000/complete-task/" + id;
      const response = fetch(url, {
        method: "PUT",
      });

      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Fragment>
      <div className="container mt-3">          
        <table className="table">
          <thead>
            <tr key="head">
              <th>Completed</th>
              <th>Task Description</th>
              <th>List Name</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={`row${todo.todo_id}`} id={todo.todo_id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={todo.complete}
                    readOnly={true}
                  />
                </td>
                <td>{todo.description}</td>
                <td>{listDict[todo.listid]}</td>
                <td>
                  <button className="btn btn-primary" disabled={todo.complete} onClick={() => completeTodo(todo.todo_id)}>Complete</button>
                </td>
                <td><EditTodo todo={todo} /></td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTodos; 