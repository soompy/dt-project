import { useRef, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderCp = ({ bannerList, isReverse = false }) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.params.autoplay.reverseDirection = isReverse;
            swiperInstance.autoplay.start();
        }
    }, [isReverse]);

    return (
        <div className="slider-wrapper">
            <Swiper
                modules={[Autoplay]}
                ref={swiperRef}
                slidesPerView="auto"
                spaceBetween={0}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={3000}
                loop={true}
                allowTouchMove={false}
                cssMode={false}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 4 },                    
                }}
            >
                {bannerList.map((banner, index) => (
                    <SwiperSlide key={index} style={{ flex: "0 0 auto" }}>
                        <img src={banner.imgSrc} alt={banner.title} />
                        <span className="desc-box">{banner.txt}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default SliderCp;
