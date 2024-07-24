import { Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import AuthPage from "../Pages/AuthPage";
import ProtectedRoute from "./ProtectedRoute";
import BookDetails from "../Components/BookDetails";
import Signup from "../Pages/Signup";
import LayOut from "../Pages/LayOut";
import Cart from "../Components/Cart";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute>
              <AuthPage />
            </AuthRoute>
          }
        >
          <Route
            index
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <Signup />
              </AuthRoute>
            }
          />
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LayOut />
            </ProtectedRoute>
          }
        >
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <BookDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
