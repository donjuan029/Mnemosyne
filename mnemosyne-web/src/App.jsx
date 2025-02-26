import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewMemory from "./pages/new-memory";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-memory" element={<NewMemory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
