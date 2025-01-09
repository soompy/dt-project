// import Swipercp from "../components/Layouts/Swipercp";
// import Calendarcp from "../components/Layouts/Calendar";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence, useTime, useTransform } from "framer-motion";
import gsap from "gsap";
import Wrapper from "../components/Layouts/Wrapper";
import KakaoMap from "../components/Layouts/KakaoMap";
import { remove } from "../utils/array-utils";
import SwitchCp from "../components/common/Switch/Switch";

const Place = () => {
    const [notifications, setNotifications] = useState([0]);

    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const timeline = gsap.timeline();

        timeline.from(cards, {
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
        });

        cards.forEach(($card) => {
            let bounds;

            function rotateToMouse(e) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                const leftX = mouseX - bounds.x;
                const topY = mouseY - bounds.y;
                const center = {
                    x: leftX - bounds.width / 2,
                    y: topY - bounds.height / 2,
                };
                const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

                $card.style.transform = `
                    scale3d(1.07, 1.07, 1.07)
                    rotate3d(
                        ${center.y / 100},
                        ${-center.x / 100},
                        0,
                        ${Math.log(distance) * 2}deg
                    )
                    scaleX(-1)
                `;

                $card.querySelector(".glow").style.backgroundImage = `
                    radial-gradient(
                        circle at
                        ${center.x * 2 + bounds.width / 2}px
                        ${center.y * 2 + bounds.height / 2}px,
                        #ffffff55,
                        #0000000f
                    )
                `;
            }

            $card.addEventListener("mouseenter", () => {
                bounds = $card.getBoundingClientRect();
                document.addEventListener("mousemove", rotateToMouse);
            });

            $card.addEventListener("mouseleave", () => {
                document.removeEventListener("mousemove", rotateToMouse);
                $card.style.transform = "";
                $card.querySelector(".glow").style.backgroundImage = "";
            });
        });
    }, []);

    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 300], { clamp: false });

    return (
        // 인터렉션 참고 https://gsap.com/community/forums/topic/28175-how-to-use-scrolltrigger-change-texts/
        <div className="place">
            <section className="visual">
                <Wrapper className="wrapper_1400">
                    <div className="spin_obj">
                        <motion.div style={{ rotate }}></motion.div>
                    </div>
                </Wrapper>
            </section>

            <Wrapper className="wrapper_1400">
                {/* <h2 className="text_slogan">어디서 놀까?</h2> */}

                {/* <div className="place_cards">
          <div className="card-container">
            <div className="card">
              Card 1<span className="glow"></span>
            </div>
            <div className="card">
              Card 2<span className="glow"></span>
            </div>
            <div className="card">
              Card 3<span className="glow"></span>
            </div>
            <div className="card">
              Card 3<span className="glow"></span>
            </div>
            <div className="card">
              Card 3<span className="glow"></span>
            </div>
          </div>
        </div> */}
            </Wrapper>

            <KakaoMap latitude={37.5665} longitude={126.978} level={3} />

            <Wrapper className="wrapper_1400">
                {/* 지도 영역 */}
                {/* 팝업스토어 맛집 놀이공간 파티룸 콘텐츠 체험 전시회 이벤트 등등 */}
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <DatePicker />
                <SwitchCp />
            </Wrapper>

            <ul className="place_alert_box">
                <AnimatePresence initial={false} mode="popLayout">
                    {notifications.map((id) => (
                        <motion.li
                            key={id}
                            layout
                            initial={{ opacity: 0, y: 50, scale: 0.3 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{
                                opacity: 0,
                                scale: 0.5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <button
                                onClick={() =>
                                    setNotifications(remove(notifications, id))
                                }
                            >
                                <CloseOutlined />
                            </button>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default Place;
