import { useState } from "react";
import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderCp = ({ bannerList, isReverse = false }) => {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay, Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(e) => setActiveIdx(e.activeIdx)}
                autoplay={{
                    delay: 800,
                    reverseDirection: isReverse,
                    disableOnInteraction: false,
                }}
                speed={500}
                pagination={{
                    clickable: true,
                }}
            >
                {bannerList.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img src={banner.imgSrc} alt={banner.title} />
                        <span
                            className={`desc-box ${
                                banner.id === activeIdx ? "active" : ""
                            }`}
                        >
                            {banner.txt}
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default SliderCp;
