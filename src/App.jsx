import { Global } from "@emotion/react";
import { globalStyles } from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Home from "./pages/Hone";
import Menu from "./pages/Menu";
import Place from "./pages/Place";
import Community from "./pages/Community";
import { ConfigProvider, Button } from "antd";
import antdTheme from "./styles/theme";
import { useState } from "react";
import Notice from "./pages/Notice";
import EventPage from "./pages/Event";
import LoginPage from "./components/Layouts/Login";
import JoinForm from "./components/Layouts/Join";
import Game from "./pages/Game";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const theme = isDarkMode
        ? {
              ...antdTheme,
              token: {
                  ...antdTheme.token,
                  colorPrimary: "#3c89e8",
                  colorSecondary: "#F4A460",
                  colorBgBase: "#1a1a1a",
                  colorTextBase: "#ffffff",                  
              },
          }
        : antdTheme;
    return (
        // [ant design theme]
        // https://ant.design/docs/react/customize-theme
        // https://ant.design/docs/react/customize-theme
        <ConfigProvider theme={theme}>
            <Global styles={globalStyles} />
            <section
                style={{
                    background: theme.token.colorBgBase,
                    color: theme.token.colorTextBase,
                    minHeight: "100vh",
                    padding: "20px",
                }}
            >
                <Header />
                <Button
                    type="primary"
                    onClick={toggleTheme}
                    style={{
                        position: "fixed",
                        bottom: "5%",
                        right: "5%",
                        zIndex: 100,
                        fontSize: "16px",
                        fontFamily: "Black Han Sans",
                        letterSpacing: "0.02rem",
                        padding: "22px 18px",
                        backgroundColor: "#00d4ff",
                    }}
                >
                    다크모드
                </Button>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/place" element={<Place />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/event" element={<EventPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/join" element={<JoinForm />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
                <Footer />
            </section>
        </ConfigProvider>
    );
};

export default App;
