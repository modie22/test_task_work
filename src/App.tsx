import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { FormPage } from "./components/pages/FormPage/FormPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
