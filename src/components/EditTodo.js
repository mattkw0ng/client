import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {
  const [description, setNewDescription] = useState(todo.description);

  const editDescription = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const url = "http://localhost:5000/edit-task/" + todo.todo_id;
      const response = fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h4 className="modal-title">Enter new description</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
              <input 
                type="text"
                className="form-control" 
                onChange={e => setNewDescription(e.target.value)} 
                value={description}
              />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={e => editDescription(e)}>Confirm</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;