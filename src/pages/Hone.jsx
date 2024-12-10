import { useState, useEffect } from "react";
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

gsap.registerPlugin(ScrollTrigger);

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

// const items = [
//   { key: "key1", content: "Item 1 Content" },
//   { key: "key2", content: "Item 2 Content" },
// ];

const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let tlHero = gsap.timeline({
            scrollTrigger: {
                trigger: ".full_text_hero",
                start: "+=133 80%",
                end: "+=200 40%",
                scrub: true,
                markers: true,
                toggleActions: "play reverse play reverse",
            },
        });
        tlHero
            .to(".hero_text._1, .hero_text._2, .hero_text._3, .hero_text._4", {
                opacity: 1,
                duration: 0.2,
                stagger: 0.1,
            })
            .to(
                ".hero_text._1, .hero_text._2, .hero_text._3, .hero_text._4",
                { opacity: 0, duration: 0.2, stagger: 0.1 },
                0.8
            );
    }, []);

    return (
        <div>
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
