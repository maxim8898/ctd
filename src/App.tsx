import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = () => {
  const [ user ] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex items-center justify-start bg-gray-900 h-dvh p-2 flex-col">
        <div className="header flex">
          <Header/>
        </div>

        <div className="content-wrapper flex items-center justify-start flex-col">
          <Routes>
            <Route
              path='/'
              element={ !user ? <Navigate to='/login' /> : <Home /> }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
