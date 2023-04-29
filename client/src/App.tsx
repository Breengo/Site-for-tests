import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import TestCreation from "./pages/TestCreation";
import TestDetails from "./pages/TestDetails";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/create_test" element={<TestCreation />} />
        <Route path="/test_details/:id" element={<TestDetails />} />
        <Route path="/test/:id" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
