import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import DetailTripPage from "./pages/detail-trip";
import PaymentPage from "./pages/payment";
import UserProfilePage from "./pages/user-profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />;
        <Route path="/trip/:id" Component={DetailTripPage} />
        <Route path="/payment" Component={PaymentPage} />
        <Route path="/profile" Component={UserProfilePage} />
      </Routes>
    </Router>
  );
}

export default App;
