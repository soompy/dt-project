import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyImage from "../components/LazyImage/LazyImage";
import giftbox from "../assets/images/event/giftbox.png";
import handLeft from "../assets/images/event/handLeft.png";
import handRight from "../assets/images/event/handRight.png";
import coin from "../assets/images/event/coin.webp";

const EventPage = () => {
  const [visualRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const iframeRef = useRef(null);
  const videoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (iframeRef.current && isScrolled) {
        const videoDuration = 1;
        const videoProgress =
          window.scrollY / document.documentElement.scrollHeight;

        if (iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({
              event: "command",
              func: "seekTo",
              args: [videoProgress * videoDuration, true],
            }),
            "*"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: threeDRef, inView: threeDInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="event_wrapper">
      <div className="bg_container">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            &#x1F389;
          </motion.span>
        ))}
      </div>

      <div className="wrapper_1400">
        <div className="flex_center_column top_visual" ref={visualRef}>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: inView ? 0 : -100,
              opacity: inView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            &#x1F38A;
          </motion.p>
          <motion.strong
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: inView ? 1 : 0.5,
              opacity: inView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            2025년, <br />
            새로운 시작을 응원합니다!
          </motion.strong>

          <LazyImage src={giftbox} className="event_giftbox" alt="상품" />
        </div>

        <ul className="text_list_container">
          {Array.from({ length: 34 }).map((_, index) => (
            <li key={index} className="text_list_item">
              띵동~~ 선물 {index + 1}이 왔어요!!
            </li>
          ))}
        </ul>

        <div className={`video_wrap ${isScrolled ? "scrolled" : ""}`}>
          <div className="fixed_box" ref={videoRef}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mRkOBWpSl7c?autoplay=0&enablejsapi=1&mute=1"
              title="새해에는 코카-콜라와 함께 좋은 일이 팡팡!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ref={iframeRef}
            ></iframe>
          </div>
        </div>

        <div className="fixed_description" ref={descRef}>
          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            &#x1F4A5; 2025년 새해 프로모션 혜택 &#x1F4A5;
          </motion.h4>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            &#x2705; 신년 감사 쿠폰 – 전 고객 대상 최대 25% 할인{" "}
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            &#x2705; 럭키드로우 이벤트 – 2025년을 여는 행운의 경품 증정{" "}
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            &#x2705; 첫 구매 고객 혜택 – 신규 가입 시 웰컴 포인트 지급
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            &#x2705; 한정판 신년 기념 상품 – 오직 지금만! 특별한 신년 에디션
            출시
          </motion.p>

          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            &#x1F381; 이벤트 기간
          </motion.h4>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            &#x1F4C5; 2025년 1월 27일(월) ~ 1월 12일(수)
          </motion.p>

          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            &#x1F3AF; 참여 방법{" "}
          </motion.h4>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            &#x1F449; 홈페이지 & 앱에서 쿠폰 다운로드 후 사용!
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            &#x1F449; 이벤트 페이지에서 럭키드로우 응모하기!
          </motion.p>

          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            새로운 한 해, 더 큰 기회와 멋진 순간들을 함께 만들어가요!
          </motion.h4>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: descInView ? 0 : -100, opacity: descInView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            &#x2728; 2025년에도 멋진 시작을 응원합니다! &#x2728;
          </motion.p>
        </div>

        <div className="threeD_visual" ref={threeDRef}>
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: threeDInView ? 0 : -100,
              opacity: threeDInView ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <LazyImage src={handLeft} className="event_leftHand" alt="왼손" />
          </motion.span>
          <motion.span>
            <LazyImage src={coin} className="event_coin" alt="코인" />
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: threeDInView ? 0 : 100,
              opacity: threeDInView ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <LazyImage
              src={handRight}
              className="event_leftHand"
              alt="오른손"
            />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
