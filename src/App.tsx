import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import DetailTripPage from "./pages/detail-trip";
import PaymentPage from "./pages/payment";
import UserProfilePage from "./pages/user-profile";
import AdminTripListPage from "./pages/admin-trip-list";
import AddTripPage from "./pages/add-trip";
import TransactionListPage from "./pages/transaction-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./modules/shared/components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" Component={HomePage} />;
            <Route path="/trip/:id" Component={DetailTripPage} />
            <Route path="/payment/:id" Component={PaymentPage} />
            <Route path="/profile" Component={UserProfilePage} />
            <Route path="/admin-trip-list" Component={AdminTripListPage} />
            <Route path="/add-trip" Component={AddTripPage} />
            <Route path="/transaction-list" Component={TransactionListPage} />
          </Routes>
        </ScrollToTop>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
