
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quotes } from "./pages/Quotes";

export default function () {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
}