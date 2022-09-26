import React, { Fragment } from "react";
import '../App.css';

import InputTodo from "../components/InputTodo";
import ListTodos from "../components/ListTodos";

function ViewAll({lists}) {

  return (
    <Fragment>
      
      <div className="container mb-5">
        <h1 className="text-center mt-5">All TodoItems</h1>
        <ListTodos lists={lists}/>
        <InputTodo lists={lists}/>
      </div>
      
    </Fragment>
  );

}

export default ViewAll;
