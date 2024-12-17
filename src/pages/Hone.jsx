import { useState, useEffect, useRef } from "react";
import Wrapper from "../components/Layouts/Wrapper";
import Button from "../components/common/Button/Button";
import CheckUi from "../components/common/Checkbox/CheckBox";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PropTypes from "prop-types";
import { Typography } from "antd";
const { Title } = Typography;
import { useGSAP } from "@gsap/react/dist";
import {
    mandu00,
    mandu01,
    mandu02,
    mandu03,
    mandu04,
    mandu05,
} from "../assets/images/home";
import SliderCp from "../components/Layouts/Slider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const radioOptions = [
    { value: "o1", label: "Custom A" },
    { value: "o2", label: "Custom B" },
    { value: "o3", label: "Custom C" },
    { value: "o4", label: "Custom D" },
];
const checkboxOptions = [
    { value: "k1", label: "m A" },
    { value: "k2", label: "m B" },
    { value: "k3", label: "m C" },
    { value: "k4", label: "m D" },
];

const bannerList = [
    {
        id: 0,
        imgSrc: mandu00,
        title: "루이",
        txt: "공주",
    },
    {
        id: 1,
        imgSrc: mandu01,
        title: "춘식",
        txt: "곤듀",
    },
    {
        id: 1,
        imgSrc: mandu02,
        title: "춘식",
        txt: "곤듀",
    },
    {
        id: 1,
        imgSrc: mandu03,
        title: "춘식",
        txt: "곤듀",
    },
    {
        id: 1,
        imgSrc: mandu04,
        title: "춘식",
        txt: "곤듀",
    },
    {
        id: 1,
        imgSrc: mandu04,
        title: "춘식",
        txt: "곤듀",
    },
];

const Home = () => {
    const container = useRef();
    const [isActiveMotion, setIsActiveMotion] = useState(false);

    useGSAP(
        () => {
            gsap.to(".cont_1", { rotation: 360 });
        },
        { scope: container }
    );

    const tl1 = useRef(null);
    const tl2 = useRef(null);

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

        const heroTitle = () => {
            tl2.current = gsap
                .timeline()
                .to(".hero_text._1", { opacity: 1, y: 0, duration: 0.5 })
                .to(".hero_text._1", { opacity: 1, duration: 1 })
                .to(".hero_text._1", { opacity: 0, y: -50, duration: 0.1 })
                .to(".hero_text._2", { opacity: 1, y: 0, duration: 0.5 })
                .to(".hero_text._2", { opacity: 1, duration: 1 })
                .to(".hero_text._2", { opacity: 0, y: -50, duration: 0.1 })
                .to(".hero_text._3", { opacity: 1, y: 0, duration: 0.5 })
                .to(".hero_text._3", { opacity: 1, duration: 1 })
                .to(".hero_text._3", { opacity: 0, y: -50, duration: 0.1 })
                .to(".hero_text._4", { opacity: 1, y: 0, duration: 0.5 })
                .to(".hero_text._4", { opacity: 1, duration: 1 })
                .to(".hero_text._4", { opacity: 0, y: -50, duration: 0.1 });

            ScrollTrigger.create({
                trigger: ".full_text_hero",
                start: "top",
                end: "bottom+=50%",
                pin: ".cont_1",
                pinSpacing: true,
                animation: tl2.current,
                scrub: 0.5,
            });
        };

        const zoom3d = () => {
            ScrollTrigger.create({
                trigger: ".cont_3",
                start: "top top",
                end: "bottom+=50%",          
                onEnter: () => {
                    document.querySelector(".cont_3").classList.add("on");                    
                },
                onLeave: () => {
                    document.querySelector(".cont_3").classList.remove("on");
                },
                onEnterBack: () => {
                    document.querySelector(".cont_3").classList.add("on");
                },
                onLeaveBack: () => {
                    document.querySelector(".cont_3").classList.remove("on");
                },
            });
        }

        visualMotion();
        heroTitle();
        zoom3d();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={container}>
            <section className={`visual ${isActiveMotion ? "is_active" : ""}`}>
                <div className="wrapper_1400"></div>
                <div className="obj_box">
                    <span className="obj obj0">
                        <img src={mandu05} alt="만두" />
                    </span>
                    <span className="obj obj1">
                        <img src={mandu05} alt="만두" />
                    </span>
                    <span className="obj obj2">
                        <img src={mandu05} alt="만두" />
                    </span>
                    <span className="obj obj3">
                        <img src={mandu05} alt="만두" />
                    </span>
                    <span className="obj obj4">
                        <img src={mandu05} alt="만두" />
                    </span>                    
                </div>
            </section>

            <section className="cont_1">
                <div className="full_text_hero">
                    <Title level={5} className="hero_text _1">
                        놀이의
                    </Title>
                    <Title level={4} className="hero_text _2">
                        새로운
                    </Title>
                    <Title level={3} className="hero_text _3">
                        패러다임
                    </Title>
                    <Title level={2} className="hero_text _4">
                        디티
                    </Title>
                </div>
                {/* 움직이는 오브젝트 ex) 공이 튀기는 */}
            </section>

            <section className="cont_2">
                <SliderCp bannerList={bannerList} />
                <SliderCp bannerList={bannerList} isReverse={true} />
            </section>

            <Wrapper className="cont_3">
                <div className="threeD_vision">
                    <div className="vision_box">
                        <h3>question</h3>
                        <p className="text_gradient">suggestion</p>
                    </div>
                    <div className="vision_box">
                        <h3>question</h3>
                        <p className="text_gradient">suggestion</p>
                    </div>
                    <div className="vision_box">
                        <h3>question</h3>
                        <p className="text_gradient">suggestion</p>
                    </div>
                </div>
            </Wrapper>

            <Button
                size="lg"
                theme="primary_1"
                type="rounded"
                label="Go"
            ></Button>

            <Wrapper className="wrapper_1400">
                <section className="cont_4"></section>

                <section className="cont_5"></section>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                {/* 설문조사 */}
                <CheckUi options={radioOptions} type="radio" />
                <CheckUi options={checkboxOptions} type="checkbox" />
            </Wrapper>
        </div>
    );
};

Button.propTypes = {
    height: PropTypes.number,
    isEnabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    theme: PropTypes.oneOf(["primary_1", "primary_2", ""]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Home;
