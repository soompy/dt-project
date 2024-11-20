import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Hone";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ConfigProvider } from "antd";

const App = () => {
  return (
    // [ant design theme] 
    // https://ant.design/docs/react/customize-theme
    // https://ant.design/docs/react/customize-theme
    <ConfigProvider 
      theme={({
        token: {
          colorPrimary: '#ccc',
          colorBgContainer: '#e0e0e0',
        },
      })}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
