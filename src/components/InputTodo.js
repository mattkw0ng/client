import React, { Fragment, useState } from "react";

const InputTodo = ({lists, id}) => {

  const [description, setDescription] = useState("");
  // if provided an ID, use that by default
  const [listid, setListId] = useState(id);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {description,listid};
      const response = fetch("http://localhost:5000/create-task", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  // If provided an ID, don't display the select form
  const selectForm = id ? null : (
    <div className="col col-4">
      <select className="form-control" onChange={e => setListId(e.target.value)} defaultValue={"DEFAULT"}>
        <option value={"DEFAULT"} disabled hidden>select list name ...</option>
        {lists.map(entry => (
          <option key={`key${entry.list_id}`} value={entry.list_id}>{entry.name}</option>
        ))}
      </select>
    </div>
  );

  return (
    <Fragment>
      <form className="mt-3" onSubmit={onSubmitForm}>
        <div className="row justify-content-md-start">
          <div className="col col-7">
            <input 
              type="text" 
              className="form-control" 
              value={description} 
              placeholder="describe your task here"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          {selectForm}
          <div className="col col-1">
            <button className="btn btn-success "> Add </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InputTodo; 