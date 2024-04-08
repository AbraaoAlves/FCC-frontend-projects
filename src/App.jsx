import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quotes } from "./pages/Quotes";
import { Palindrome } from "./pages/Palindrome";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/palindrome" element={<Palindrome />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
