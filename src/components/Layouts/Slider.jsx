import { useRef, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const SliderCp = ({ bannerList, isReverse = false }) => {
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            swiperInstance.params.autoplay.reverseDirection = isReverse;
            swiperInstance.autoplay.start();
        }
    }, [isReverse]);


    const handleClick = (link) => {
        if (link) navigate(link); // 링크가 존재하면 해당 경로로 이동
    };

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
                    <SwiperSlide 
                        key={index} 
                        style={{ flex: "0 0 auto" }}
                        onClick={() => handleClick(banner.link)}
                    >
                        <img src={banner.imgSrc} alt={banner.title} />
                        <span className="desc-box">{banner.txt}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default SliderCp;
