import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Home from "./pages/Hone";
import Menu from "./pages/Menu";
import Place from "./pages/Place";
import { ConfigProvider, Button } from "antd";
import antdTheme from "./styles/theme";
import { useState } from "react";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const theme = isDarkMode
        ? {
              ...antdTheme,
              token: {
                  ...antdTheme.token,
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
                    Toggle Dark Mode
                </Button>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/place" element={<Place />} />
                </Routes>
            </section>
        </ConfigProvider>
    );
};

export default App;
