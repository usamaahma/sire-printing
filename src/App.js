import React, { useState } from "react";
import AppRoutes from './routes'; // Assuming 'routes' is the correct path
import "./App.css";
import Login from "./components/loginMainVerification/LoginMainVerify"; // Assuming correct path
import Fixed from "./components/fixed-icons/fixedicon"; // Assuming correct path

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="App">
      <Fixed /> {/* Fixed icon is always visible */}
      {isVerified ? (
        <AppRoutes /> // Show main app routes if the user is verified
      ) : (
        <Login onVerified={setIsVerified} /> // Show login screen if not verified
      )}
    </div>
  );
}

export default App;
