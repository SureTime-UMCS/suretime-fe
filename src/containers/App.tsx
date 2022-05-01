import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BoxLogin from "../components/BoxLogin/BoxLogin";
import BoxRegister from "../components/BoxRegister/BoxRegister";
import CustomPage from "./pages/CustomPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CustomPage title={"Witamy!"} box={MainPage} />}
        />
        <Route
          path="/login"
          element={<CustomPage title={"Logowanie"} box={BoxLogin} />}
        />
        <Route
          path="/register"
          element={<CustomPage title={"Rejestracja"} box={BoxRegister} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
