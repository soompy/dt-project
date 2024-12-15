import { useState, useEffect, useRef } from "react";
import { DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";
import Button from "../components/common/Button/Button";
import Modal from "../components/Layouts/Modal";
import FlexBox from "../components/Layouts/Flexbox";
import ListCp from "../components/List/List";
// import SwiperCp from "../components/Layouts/Swipercp";
import CheckUi from "../components/common/Checkbox/CheckBox";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PropTypes from "prop-types";
import { Typography } from "antd";
const { Title } = Typography;
import { useGSAP } from "@gsap/react/dist";
import { mandu00, mandu01, mandu02, mandu03, mandu04 } from "../assets/images/home";

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

// const items = [
//   { key: "key1", content: "Item 1 Content" },
//   { key: "key2", content: "Item 2 Content" },
// ];

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
    let tlHero = gsap.timeline({
      scrollTrigger: {
        trigger: ".full_text_hero",
        start: "center center",
        end: "top bottom",
        scrub: true,
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
    tlHero
      .to(".hero_text._1, .hero_text._2, .hero_text._3, .hero_text._4", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.5,
      })
      .to(
        ".hero_text._1, .hero_text._2, .hero_text._3, .hero_text._4",
        { opacity: 1, duration: 0.5, stagger: 0.5 },
        0.8
      );

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
    <div>
      <Wrapper className="wrapper_1400">
        <div ref={container}>
          <section className={`visual ${isActiveMotion ? "is_active" : ""}`}>
            <div className="wrapper_1400"></div>
            <div className="obj_box">
              <span className="obj obj0"><img src={mandu00} alt="만두 최고야" /></span>
              <span className="obj obj1"><img src={mandu01} alt="만두 이뻐" /></span>
              <span className="obj obj2"><img src={mandu02} alt="만두 잘했어" /></span>
              <span className="obj obj3"><img src={mandu03} alt="만두 하면된다" /></span>
              <span className="obj obj4"><img src={mandu04} alt="만두 또만나요" /></span>
            </div>
            <span className="img_box">
              <img className="img img1" src="" alt="" />
              <img className="img img2" src="" alt="" />
            </span>
          </section>

          <section className="cont_1 place_cont">
            <div className="wrapper_1400"></div>
          </section>

          <section className="cont_2 place_cont">
            <div className="wrapper_1400"></div>
          </section>

          <section className="cont_3 place_cont">
            <div className="wrapper_1400">{/* <SwiperCp></SwiperCp> */}</div>
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
        <Button size="lg" theme="primary_1" type="rounded" label="Go"></Button>
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
