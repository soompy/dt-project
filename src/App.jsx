import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Home from "./pages/Hone";
import Menu from "./pages/Menu";
import Place from "./pages/Place";
import Community from "./pages/Community";
import { ConfigProvider, Button } from "antd";
import antdTheme from "./styles/theme";
import { useState } from "react";
import Notice from "./pages/Notice";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const theme = isDarkMode
        ? {
              ...antdTheme,
              token: {
                  ...antdTheme.token,
                  colorPrimary: "#3c89e8",
                  colorSecondary: "#d89614",
                  colorBgBase: "#1a1a1a",
                  colorTextBase: "#fff",
              },
          }
        : antdTheme;
    return (
        // [ant design theme]
        // https://ant.design/docs/react/customize-theme
        // https://ant.design/docs/react/customize-theme
        <ConfigProvider theme={theme}>
            <section
                style={{
                    background: theme.token.colorBgBase,
                    color: theme.token.colorTextBase,
                    minHeight: "100vh",
                    padding: "20px",
                }}
            >
                <Header />
                <Button type="primary" onClick={toggleTheme}>
                    다크모드
                </Button>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/place" element={<Place />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/notice" element={<Notice />} />
                </Routes>
            </section>
        </ConfigProvider>
    );
};

export default App;
