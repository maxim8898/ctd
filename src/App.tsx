import React from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

function App() {
  return (
      <div className="flex items-center justify-start bg-gray-900 h-dvh p-2 flex-col">
          <div className="flex">
              <Header />
          </div>
          <div className="flex max-w-sm pt-6">
              <Calendar />
          </div>
          <div className="flex pt-6">
              <Button />
          </div>
      </div>
  );
}

export default App;
