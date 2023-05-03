import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import TestCreation from "./pages/TestCreation";
import TestDetails from "./pages/TestDetails";
import Test from "./pages/Test";
import TestResults from "./pages/TestResults";
import ProtectedRoute from "./utils/ProtectedRouter";
import { useAppDispatch, useAppSelector } from "./redux/store";
import axios from "./axios";
import { login } from "./redux/slices/authSlice";

function App() {
  const isAuth = useAppSelector((state) => state.auth.userData);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      axios
        .get("/user/check", {
          headers: {
            token,
          },
        })
        .then((res) => dispatch(login(res.data)));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoute isAllowed={isAuth !== null} redirect="/auth" />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/test_details/:id" element={<TestDetails />} />
          <Route path="/test_results/:id" element={<TestResults />} />
          <Route path="/create_test" element={<TestCreation />} />
          <Route path="/test/:id" element={<Test />} />
        </Route>
        <Route
          element={<ProtectedRoute isAllowed={isAuth === null} redirect="/" />}
        >
          <Route path="/auth" element={<Auth />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
