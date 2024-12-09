import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swipercp from "../components/Layouts/Swipercp";
import Calendarcp from "../components/Layouts/Calendar";
import { Typography } from "antd";
const { Title } = Typography;

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Place = () => {
    const container = useRef();
    const [isActiveMotion, setIsActiveMotion] = useState(false);
    const tl1 = useRef(null);
    const tl2 = useRef(null);

    useGSAP(
        () => {
            gsap.to(".cont_1", { rotation: 360 });
        },
        { scope: container }
    );

    useEffect(() => {
        const visualMotion = () => {
            gsap.set(".obj1, obj2, obj3, obj4, obj5", {
                delay: 0,
                opacity: 0,
                duration: 0,
                ease: "none",
            });

            tl1.current = gsap
                .timeline({ onComplete: () => setIsActiveMotion(true) })
                .to(".obj0", { delay: 0, opacity: 1, duration: 0.3 })
                .to(".obj1", { delay: -0.1, opacity: 1, duration: 0.3 })
                .to(".obj2", { delay: -0.1, opacity: 1, duration: 0.3 })
                .to(".obj3", { delay: -0.2, opacity: 1, duration: 0.3 })
                .to(".obj4", { delay: -0.3, opacity: 1, duration: 0.3 });
        };

        const textMotions = document.querySelectorAll(".text");
        textMotions.forEach((text) => {
            let tlText = gsap.timeline({
                scrollTrigger: {
                    text,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                },
            });
            tlText
                .to(text, {
                    autoAlpha: 1,
                })
                .to(
                    text,
                    {
                        autoAlpha: 0,
                    },
                    0.5
                );
        });

        const sectionScrollMotion = () => {
            tl2.current = gsap
                .timeline()
                .to(".img1", { opacity: 1, y: 0, duration: 0.5 })
                .to(".img1", { opacity: 1, duration: 1 })
                .to(".img1", { opacity: 0, y: -50, duration: 0.1 })
                .to(".img2", { opacity: 1, y: 0, duration: 0.5 })
                .to(".img2", { opacity: 1, duration: 1 })
                .to(".img2", { opacity: 0, y: -50, duration: 0.1 });

            ScrollTrigger.create({
                trigger: ".visual",
                start: "top",
                end: "bottom+=50%",
                pin: true,
                pinSpacing: true,
                animation: tl2.current,
                scrub: 0.5,
            });
        };

        visualMotion();

        sectionScrollMotion();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        // 인터렉션 참고 https://gsap.com/community/forums/topic/28175-how-to-use-scrolltrigger-change-texts/
        <div className="place">
            {/* 팝업스토어 맛집 놀이공간 파티룸 콘텐츠 체험 전시회 이벤트 등등 */}
            <div ref={container}>
                <section
                    className={`visual ${isActiveMotion ? "is_active" : ""}`}
                >
                    <div className="wrapper-1400"></div>
                    <span className="obj_box">
                        <em className="obj obj0"></em>
                        <em className="obj obj1"></em>
                        <em className="obj obj2"></em>
                        <em className="obj obj3"></em>
                        <em className="obj obj4"></em>
                    </span>
                    <span className="img_box">
                        <img className="img img1" src="" alt="" />
                        <img className="img img2" src="" alt="" />
                    </span>
                </section>

                <section className="cont_1 place_cont">
                    <div className="wrapper-1400">
                        <div>
                            <Title level={5} className="text text1">
                                dddd
                            </Title>
                            <Title level={4} className="text text2">
                                dddd
                            </Title>
                            <Title level={3} className="text text3">
                                dddd
                            </Title>
                            <Title level={2} className="text text4">
                                dddd
                            </Title>
                            <Title level={1} className="text text5">
                                dddd
                            </Title>
                        </div>
                    </div>
                </section>

                <section className="cont_2 place_cont">
                    <div className="wrapper-1400"></div>
                </section>

                <section className="cont_3 place_cont">
                    <div className="wrapper-1400">
                        <Swipercp></Swipercp>
                    </div>
                </section>

                <section className="cont_4 place_cont">
                    <div className="wrapper-1400">
                        <div className="swiper-container">
                            <Calendarcp />
                        </div>
                    </div>
                </section>

                <section className="cont_5 place_cont">
                    <div className="wrapper-1400"></div>
                </section>
            </div>
        </div>
    );
};

export default Place;
