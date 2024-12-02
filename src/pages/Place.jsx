import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react/dist";    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

gsap.registerPlugin(useGSAP,ScrollTrigger);

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
      gsap.set (
        ".obj1, obj2, obj3, obj4, obj5",
        {delay: 0, opacity: 0, duration: 0, ease: "none"}
      );

      tl1.current = gsap.timeline({ onComplete: () => setIsActiveMotion(true) })
          .to(".obj0", { delay: 0, opacity: 1, duration: 0.3 })
          .to(".obj1", { delay: -0.1, opacity: 1, duration: 0.3 })
          .to(".obj2", { delay: -0.1, opacity: 1, duration: 0.3 })
          .to(".obj3", { delay: -0.2, opacity: 1, duration: 0.3 })
          .to(".obj4", { delay: -0.3, opacity: 1, duration: 0.3 })          
      };

      const sectionScrollMotion = () => {
        tl2.current = gsap.timeline()
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
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

  return (
    <div className="place">     
      <div ref={container}>

        <section className={`visual ${isActiveMotion ? "is_active" : ""}`}>
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
            <p className="text text1">1번이다아</p>
            <p className="text text2">2번이다아</p>
          </div>
        </section>

        <section className="cont_2 place_cont">
          <div className="wrapper-1400">
          {/* 무한 좌우롤링 각 역방향 */}
            <Swiper        
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              autoplay={true}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <Swiper        
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              autoplay={true}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="cont_3 place_cont">
          <div className="wrapper-1400"></div>
        </section>

        <section className="cont_4 place_cont">
          <div className="wrapper-1400"></div>
        </section>

        <section className="cont_5 place_cont">
          <div className="wrapper-1400"></div>
        </section>
      </div>
    </div>
  );
};

export default Place;
