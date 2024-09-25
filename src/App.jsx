import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Hone";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
