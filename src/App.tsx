import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./components/pages/Home";
import Event from "./components/pages/Event";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:year" element={<Event />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
