import "./App.css";
import AuthProvider from "./provider/AuthProvider";
import Routes from "./route";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
