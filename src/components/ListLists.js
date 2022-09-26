import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ListTodos = ({lists}) => {
  const navigate = useNavigate();

  const deleteList = async id => {
    try {
      const url = "http://localhost:5000/delete-list/" + id;
      const response = fetch(url, {
        method: "DELETE",
      });

      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewList = async id => {
    try {
      const url = "/view-list/" + id;
      navigate(url);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Fragment>
      <div className="container mt-3">          
        <table className="table">
          <thead>
            <tr>
              <th>List ID</th>
              <th>List Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lists.map(list => (
              <tr key={`key${list.list_id}`}>
                <td>{list.list_id}</td>
                <td>{list.name}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => viewList(list.list_id)}>View</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteList(list.list_id)}>Delete</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>-</td>
              <td>View all TodoItems</td>
              <td>
                <button className="btn btn-primary" onClick={() => navigate("view-all")}>View</button>
              </td>
              <td>
                <button className="btn btn-danger" disabled>------</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

// onClick={deleteList(list.list_id)}

export default ListTodos; 