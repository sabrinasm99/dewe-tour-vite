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
import AdminAuthenticatedRoute from "./modules/shared/infra/routers/AdminAuthenticatedRoute";
import CustomerAuthenticatedRoute from "./modules/shared/infra/routers/CustomerAuthenticatedRoute";
import EditTripPage from "./pages/edit-trip";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trip/:id" element={<DetailTripPage />} />
            <Route
              path="/payment"
              element={
                <CustomerAuthenticatedRoute>
                  <PaymentPage />
                </CustomerAuthenticatedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <CustomerAuthenticatedRoute>
                  <UserProfilePage />
                </CustomerAuthenticatedRoute>
              }
            />
            <Route
              path="/admin-trip-list"
              element={
                <AdminAuthenticatedRoute>
                  <AdminTripListPage />
                </AdminAuthenticatedRoute>
              }
            />
            <Route
              path="/add-trip"
              element={
                <AdminAuthenticatedRoute>
                  <AddTripPage />
                </AdminAuthenticatedRoute>
              }
            />
            <Route
              path="/transaction-list"
              element={
                <AdminAuthenticatedRoute>
                  <TransactionListPage />
                </AdminAuthenticatedRoute>
              }
            />
            <Route
              path="/edit-trip/:id"
              element={
                <AdminAuthenticatedRoute>
                  <EditTripPage />
                </AdminAuthenticatedRoute>
              }
            />
          </Routes>
        </ScrollToTop>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
