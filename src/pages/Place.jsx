// import Swipercp from "../components/Layouts/Swipercp";
// import Calendarcp from "../components/Layouts/Calendar";
import { useEffect } from "react";
import { DatePicker } from "antd";
import gsap from "gsap";
import Wrapper from "../components/Layouts/Wrapper";
import KakaoMap from "../components/Layouts/KakaoMap";

const Place = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const timeline = gsap.timeline();

    timeline.from(cards, {
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });

    cards.forEach(($card) => {
      let bounds;

      function rotateToMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        $card.style.transform = `
                    scale3d(1.07, 1.07, 1.07)
                    rotate3d(
                        ${center.y / 100},
                        ${-center.x / 100},
                        0,
                        ${Math.log(distance) * 2}deg
                    )
                    scaleX(-1)
                `;

        $card.querySelector(".glow").style.backgroundImage = `
                    radial-gradient(
                        circle at
                        ${center.x * 2 + bounds.width / 2}px
                        ${center.y * 2 + bounds.height / 2}px,
                        #ffffff55,
                        #0000000f
                    )
                `;
      }

      $card.addEventListener("mouseenter", () => {
        bounds = $card.getBoundingClientRect();
        document.addEventListener("mousemove", rotateToMouse);
      });

      $card.addEventListener("mouseleave", () => {
        document.removeEventListener("mousemove", rotateToMouse);
        $card.style.transform = "";
        $card.querySelector(".glow").style.backgroundImage = "";
      });
    });
  }, []);

  return (
    // 인터렉션 참고 https://gsap.com/community/forums/topic/28175-how-to-use-scrolltrigger-change-texts/
    <div className="place">
      <Wrapper className="wrapper_1400">
        {/* <h2 className="text_slogan">어디서 놀까?</h2> */}

        {/* <div className="place_cards">
          <div className="card-container">
            <div className="card">
              Card 1<span className="glow"></span>
            </div>
            <div className="card">
              Card 2<span className="glow"></span>
            </div>
            <div className="card">
              Card 3<span className="glow"></span>
            </div>
            <div className="card">
              Card 3<span className="glow"></span>
            </div>
            <div className="card">
              Card 3<span className="glow"></span>
            </div>
          </div>
        </div> */}
      </Wrapper>

      <KakaoMap latitude={37.5665} longitude={126.9780} level={3} />
      
      <Wrapper className="wrapper_1400">
        {/* 지도 영역 */}
        {/* 팝업스토어 맛집 놀이공간 파티룸 콘텐츠 체험 전시회 이벤트 등등 */}        
      </Wrapper>

      <Wrapper className="wrapper_1400">
        <DatePicker />
      </Wrapper>
    </div>
  );
};

export default Place;
