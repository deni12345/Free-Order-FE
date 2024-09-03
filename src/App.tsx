import "./App.css";
import AuthProvider from "./provider/AuthProvider";
import Routes from "./routes";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
