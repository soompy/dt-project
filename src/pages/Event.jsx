import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyImage from "../components/LazyImage/LazyImage";
import giftbox from "../assets/images/event/giftbox.png";

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
        const scrollPosition = window.scrollY;        
        const videoDuration = 1;        
        const videoProgress = scrollPosition / 1000;

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
          <motion.strong
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: inView ? 1 : 0.5,
              opacity: inView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            2025년 맞이
          </motion.strong>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: inView ? 0 : -100,
              opacity: inView ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            특별한 이벤트
          </motion.p>
          <LazyImage src={giftbox} className="event_giftbox" alt="상품" />
        </div>

        <div className="list_container">
          {Array.from({ length: 45 }).map((_, index) => (
            <div key={index} className="list_item">
              Item {index + 1}
            </div>
          ))}
        </div>

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

        <div className="fixed_description">Fixed Description</div>

        <div className="poster hidden_area">
          <div className="poster__parallax"></div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
