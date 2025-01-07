import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { MenuOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import { Space } from "antd";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef(null);
    const svgRefs = useRef([]);

    const onClickHeader = () => {
        setIsVisible((prev) => !prev);

        const svgs = svgRefs.current;
        gsap.to(svgs[0], {
            bottom: isVisible ? "0%" : "20%",
            duration: 0.6,
            ease: "power3.out",
        });
        gsap.to(svgs[1], {
            bottom: isVisible ? "0%" : "10%",
            duration: 0.6,
            ease: "power3.out",
        });
        gsap.to(svgs[2], {
            bottom: isVisible ? "0%" : "40%",
            duration: 0.6,
            ease: "power3.out",
        });
        gsap.to(svgs[3], {
            bottom: isVisible ? "0%" : "70%",
            duration: 0.6,
            ease: "power3.out",
        });
    };

    const onLinkClick = () => {
        setIsVisible(false); // 링크 클릭 시 'on' 클래스 제거
    };

    return (
        <div ref={headerRef}>
            <section className="btn_top_box">
                <button className={`btn_header ${isVisible ? "close" : ""}`} onClick={onClickHeader}>
                    {isVisible ? <CloseOutlined /> : <MenuOutlined />}
                </button>
            </section>

            <section className={`full_header ${isVisible ? "on" : ""}`}>
                <div className="header_top_area">
                    {/* <h1>로고</h1> */}
                    <div className="mypage_box">
                        <Space size={[20, 0]}>
                            <Link
                                data-text="Login"
                                to="/login"
                                onClick={onLinkClick}
                            >
                                로그인
                            </Link>

                            <Link
                                data-text="Join"
                                to="/join"
                                onClick={onLinkClick}
                            >
                                회원가입
                            </Link>
                        </Space>                        
                    </div>
                </div>                

                <nav className="nav">
                    <ul>
                        <li>
                            <Link data-text="Home" to="/" onClick={onLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-text="Menu"
                                to="/menu"
                                onClick={onLinkClick}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-text="Place"
                                to="/place"
                                onClick={onLinkClick}
                            >
                                Place
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-text="Community"
                                to="/community"
                                onClick={onLinkClick}
                            >
                                Community
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-text="Notice"
                                to="/notice"
                                onClick={onLinkClick}
                            >
                                Notice
                            </Link>
                        </li>
                    </ul>
                </nav>                

                <div className="full_bg">
                    {[...Array(4)].map((_, index) => (
                        <svg
                            key={index}
                            ref={(el) => (svgRefs.current[index] = el)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            style={{ bottom: "0" }}
                        >
                            {index === 0 && (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                    >
                                        <circle cx="50" cy="50" r="45" />
                                        <path d="M50 5 A45 45 0 0 1 95 50" />
                                        <path d="M50 5 L50 95" />
                                        <path d="M50 95 A45 45 0 0 1 5 50" />
                                    </svg>
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <rect
                                        x="20"
                                        y="20"
                                        width="60"
                                        height="40"
                                        rx="5"
                                    />
                                    <line x1="30" y1="30" x2="70" y2="50" />
                                    <line x1="30" y1="50" x2="70" y2="30" />
                                </>
                            )}
                            {index === 2 && (
                                <>
                                    <circle cx="50" cy="50" r="45" />
                                    <circle cx="40" cy="40" r="8" />
                                    <circle cx="60" cy="40" r="8" />
                                    <circle cx="50" cy="60" r="10" />
                                </>
                            )}
                            {index === 3 && (
                                <>
                                    <rect
                                        x="10"
                                        y="50"
                                        width="80"
                                        height="40"
                                        rx="5"
                                    />
                                    <path d="M10 50 Q50 10 90 50" />
                                    <line x1="50" y1="55" x2="50" y2="90" />
                                    <circle cx="50" cy="70" r="3" />
                                </>
                            )}
                        </svg>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Header;
