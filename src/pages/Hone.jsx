import { useState, useEffect, useRef } from "react";
import { DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";
import Button from "../components/common/Button/Button";
import Modal from "../components/Layouts/Modal";
import FlexBox from "../components/Layouts/Flexbox";
import ListCp from "../components/List/List";
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
} from "../assets/images/home";
import SliderCp from "../components/Layouts/Slider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const titles = [
    {
        text: "글1",
        title: "제목1",
        titleClass: "title-class-1",
        itemClass: "item-class-1",
        value: "key1",
        imageSrc: "image1.jpg",
        imageAlt: "Image 1",
        title2: "Sub Title 1",
        txt2: "Additional text for item 1",
    },
    {
        text: "글2",
        title: "제목2",
        titleClass: "title-class-2",
        itemClass: "item-class-2",
        value: "key2",
        imageSrc: "image2.jpg",
        imageAlt: "Image 2",
        txt2: "Additional text for item 2",
    },
    {
        text: "글3",
        title: "제목3",
        titleClass: "title-class-2",
        itemClass: "item-class-2",
        value: "key2",
        imageSrc: "image2.jpg",
        imageAlt: "Image 3",
        txt2: "Additional text for item 3",
    },
];

const items = {
    key1: "Item 1 Content",
    key2: "Item 2 Content",
};

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
        imgSrc: "data:image/jpeg;base64,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",
        title: "루이",
    },
    {
        id: 1,
        imgSrc: "data:image/png;base64,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",
        title: "춘식",
    },
];

const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);

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
                pin: true,
                pinSpacing: true,
                animation: tl2.current,
                scrub: 0.5,
            });
        };

        visualMotion();
        heroTitle();

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div>
            <Wrapper className="wrapper_1400">
                <div ref={container}>
                    <section
                        className={`visual ${
                            isActiveMotion ? "is_active" : ""
                        }`}
                    >
                        <div className="wrapper_1400"></div>
                        <div className="obj_box">
                            <span className="obj obj0">
                                <img src={mandu00} alt="만두 최고야" />
                            </span>
                            <span className="obj obj1">
                                <img src={mandu01} alt="만두 이뻐" />
                            </span>
                            <span className="obj obj2">
                                <img src={mandu02} alt="만두 잘했어" />
                            </span>
                            <span className="obj obj3">
                                <img src={mandu03} alt="만두 하면된다" />
                            </span>
                            <span className="obj obj4">
                                <img src={mandu04} alt="만두 또만나요" />
                            </span>
                        </div>
                    </section>

                    <section className="cont_1 place_cont">
                        <div className="wrapper_1400"></div>
                    </section>

                    <section className="cont_2 place_cont">
                        <div className="wrapper_1400"></div>
                    </section>

                    <section className="cont_3 place_cont">
                        <div className="wrapper_1400">
                            <SliderCp bannerList={bannerList}></SliderCp>
                        </div>
                    </section>

                    <section className="cont_4 place_cont">
                        <div className="wrapper_1400">
                            <div className="swiper-container"></div>
                        </div>
                    </section>

                    <section className="cont_5 place_cont">
                        <div className="wrapper_1400"></div>
                    </section>
                </div>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <div className="full_text_hero">
                    <Title level={5} className="hero_text _1">
                        ttt
                    </Title>
                    <Title level={4} className="hero_text _2">
                        rrrr
                    </Title>
                    <Title level={3} className="hero_text _3">
                        ssssss
                    </Title>
                    <Title level={2} className="hero_text _4">
                        zzzzzzzz
                    </Title>
                </div>
                {/* 움직이는 오브젝트 ex) 공이 튀기는 */}
            </Wrapper>

            <Wrapper className="wrapper_1400 flex_center_column">
                <h3>question</h3>
                <p className="text_gradient">suggestion</p>
                <Button
                    size="lg"
                    theme="primary_1"
                    type="rounded"
                    label="Go"
                ></Button>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <FlexBox>1</FlexBox>
                <FlexBox>2</FlexBox>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <CheckUi options={radioOptions} type="radio" />

                <CheckUi options={checkboxOptions} type="checkbox" />
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <ListCp titles={titles} items={items}>
                    {{
                        "item.key1": <div>1번박스</div>,
                        "item.key2": <div>2번박스</div>,
                        "item.key3": <div>3번박스</div>,
                    }}
                </ListCp>

                <DatePicker />

                <Button size="md" theme="primary_1" label="test"></Button>

                <>
                    <Button
                        onClick={() => setModalVisible(true)}
                        size="md"
                        theme="primary_1"
                        label="showModal"
                    ></Button>
                    <Modal
                        visible={isModalVisible}
                        setVisible={setModalVisible}
                        onClose={() => setModalVisible(false)}
                        isCancelMode={false}
                    />
                </>
            </Wrapper>

            <Wrapper className="wrapper_1400"></Wrapper>
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
