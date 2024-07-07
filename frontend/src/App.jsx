import { useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { SignupPage } from "./Routes.js";
import { LoginPage } from "./Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
