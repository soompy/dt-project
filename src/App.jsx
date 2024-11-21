import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Home from "./pages/Hone";
import Menu from "./pages/Menu";
import Place from "./pages/Place";
import { ConfigProvider } from "antd";
import { antdTheme } from "./styles/antdtheme";


const App = () => {
  return (
    // [ant design theme] 
    // https://ant.design/docs/react/customize-theme
    // https://ant.design/docs/react/customize-theme
    <ConfigProvider theme={antdTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
