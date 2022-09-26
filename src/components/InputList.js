import React, { Fragment, useState } from "react";

const InputList = () => {

  const [name, setName] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {name};
      const response = fetch("http://localhost:5000/create-list", {
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

  return (
    <Fragment>
      <form className="mt-3" onSubmit={onSubmitForm}>
          <div className="row justify-content-md-start">
            <div className="col col-6">
              <input 
                type="text" 
                className="form-control mx-2" 
                value={name} 
                placeholder="name your list here"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="col col-1">
              <button className="btn btn-success "> Create </button>
            </div>  
          </div>
      </form>
    </Fragment>
  );
};

export default InputList; 