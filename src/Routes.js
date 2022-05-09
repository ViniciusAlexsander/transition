import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SemTransition } from "./pages/semTransition";
import { Transition } from "./pages/transition";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SemTransition />} />
        <Route path="/transition" element={<Transition />} />
      </Routes>
    </Router>
  );
}
