import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Carousel } from "antd";
const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const ani1Slides = [
    { id: 1, branchName: "Branch 1", name: "Name 1", univ: "University 1" },
    { id: 2, branchName: "Branch 2", name: "Name 2", univ: "University 2" },
    { id: 3, branchName: "Branch 3", name: "Name 3", univ: "University 3" },
];

const ani2Slides = [
    { id: 4, branchName: "Branch 4", name: "Name 4", univ: "University 4" },
    { id: 5, branchName: "Branch 5", name: "Name 5", univ: "University 5" },
    { id: 6, branchName: "Branch 6", name: "Name 6", univ: "University 6" },
];

const commonSwiperOption = {
    loop: true,
    autoplay: { delay: 0, disableOnInteraction: false },
    speed: 5000,
    sliderPerView: "auto",
    spaceBetween: 10,
    allowTouchMove: false,
    observer: true,
    observeParent: false,
};

const SwiperCp = () => {
    return (
        <div>
            <Carousel
                effect="scrollx"
                easing="linear"
                infinite="true"
                draggable="true"
            >
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            {/* 무한 좌우롤링 각 역방향 */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                autoplay={true}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                autoplay={true}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <Swiper {...commonSwiperOption}>
                {ani1Slides.map((slide) => {
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            <p>{slide.branchName}</p>
                            <p>{slide.name}</p>
                            <p>{slide.univ}</p>
                        </div>
                    </SwiperSlide>;
                })}
            </Swiper>

            <Swiper {...commonSwiperOption}>
                {ani2Slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide-content">
                            <p>{slide.branchName}</p>
                            <p>{slide.name}</p>
                            <p>{slide.univ}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperCp;
