import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />;
      </Routes>
    </Router>
  );
}

export default App;
