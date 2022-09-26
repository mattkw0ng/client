import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import '../App.css';

import InputTodo from "../components/InputTodo";
import ListTodos from "../components/ListTodos";

function ViewList({lists}) {
  const { id } = useParams();

  // Construct dictionary to link ids to names
  const listDict = {};
  if (lists) {
    lists.forEach(element => {
      listDict[element.list_id] = element.name;
    });
  }

  return (
    <Fragment>
      
      <div className="container mb-5">
        <h1 className="text-center mt-5">TodoItems - {listDict[id]}</h1>
        <ListTodos lists={lists} id={id}/>
        <InputTodo lists={lists} id={id}/>
      </div>
      
    </Fragment>
  );

}

export default ViewList;
