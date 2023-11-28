import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoginView from "../views/LoginView/LoginView";
import RegisterView from "../views/RegisterView/RegisterView";
import ProtectedRoute from "../components/ProtectedRoute";
const HomeView = lazy(() => import("../views/HomeView/HomeView"));
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route
            exact
            path="/home"
            element={
              <Suspense fallback={<h2 style={{display: "Grid", placeItems: "center"}}>Loading...</h2>}>
                <HomeView />
              </Suspense>
            }
          />
          <Route exact path="/createUser" element={<RegisterView />}></Route>
        </Route>
        <Route exact path="/login" element={<LoginView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
