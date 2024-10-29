import React from "react";
import AppRoutes from './routes';
import "./App.css";
import Fixed from "./components/fixed-icons/fixedicon";
 

function App() {
  return (
    <div className="App">
      <Fixed/>
    <AppRoutes/>
  </div>
  );
}

export default App;
