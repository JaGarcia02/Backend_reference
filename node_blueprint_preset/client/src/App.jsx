import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login_Page from "./pages/Login_Page";
import CreateProjectPage from "./pages/CreateProjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login_Page />} />
        <Route path="/main" element={<CreateProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
