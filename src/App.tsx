import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import DetailTripPage from "./pages/detail-trip";
import PaymentPage from "./pages/payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />;
        <Route path="/trip/:id" Component={DetailTripPage} />
        <Route path="/payment" Component={PaymentPage} />
      </Routes>
    </Router>
  );
}

export default App;
