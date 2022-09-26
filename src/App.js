import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from './routes/Home';
import ViewAll from './routes/ViewAll';
import ViewList from './routes/ViewList';
import useToken from './useToken';

function App() {
  const [lists, setLists] = useState([]);

  const getLists = async() => {
    try {
      
      const response = await fetch("http://localhost:5000/get-lists");
      const jsonData = await response.json();

      setLists(jsonData)
      console.log("Fetched data");
    } catch (error) {
      console.error(error.message);
    }
  }
  
  useEffect(() => {
    getLists();
  },[]);

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home lists={lists}/>}>
          {/* Show all the lists */}
        </Route>
        <Route path="/view-list/:id" element={<ViewList lists={lists}/>}>
          {/* Show all entries in a list */}
        </Route>
        <Route path="/view-all" element={<ViewAll lists={lists}/>}>
          {/* Show all entries */}
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
