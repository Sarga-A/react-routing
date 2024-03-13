import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login.js";
import Registration from "./pages/Registration.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
