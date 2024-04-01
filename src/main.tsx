import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

{
  /* Redux Setup */
}
import { Provider } from "react-redux";
import store from "./redux/Store";

{
  /* Public Pages */
}
import LoginPage from "./pages/auth/loginPage";
// import RegisterPage from "./pages/Register";

{
  /* Auth Protected Routes */
}
import ProtectedRoutes from "./ProtectedRoutes";

import "./index.css";
import Dashboard from "./pages/dashboard/dashboard";
import RegisterPage from "./pages/auth/registerPage";
import TestPage from "./pages/auth/testPage";
import ResultPage from "./pages/auth/resultPage";
import Home from "./pages/Home";
import Upload from "./pages/dashboard/upload";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth routes */}
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result" element={<ResultPage />} />
        {/* Protected Refresh Token Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
