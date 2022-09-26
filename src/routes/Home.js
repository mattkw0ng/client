import React, { Fragment } from "react";
import '../App.css';

import InputList from "../components/InputList.js";
import ListLists from "../components/ListLists.js";

function Home({lists}) {

  return (
    <Fragment>
      
      <div className="container mb-5">
        <h1 className="text-center mt-5">TodoLists</h1>
        <ListLists lists={lists}/>
        <InputList />
      </div>
      
    </Fragment>
  );

}

export default Home;
