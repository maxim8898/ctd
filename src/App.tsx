import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import DatabaseContextProvider from "./contexts/Database/databaseContext.provider";
import AuthContextProvider from "./contexts/Auth/authContext.provider";

const App = () => {
  const [ user ] = useState(true);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="flex items-center justify-start bg-gray-900 h-dvh p-2 flex-col">
          <div className="header flex">
            <Header/>
          </div>

          <div className="content-wrapper flex items-center justify-start flex-col">
            <Routes>
              <Route
                path='/'
                element={ !user ? <Navigate to='/login' /> : <DatabaseContextProvider><Home /></DatabaseContextProvider> }
              />
            </Routes>
          </div>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
