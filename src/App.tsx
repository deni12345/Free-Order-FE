import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./view/Home";
import { Login } from "./view/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
