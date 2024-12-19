import { useEffect } from "react";
import Wrapper from "../components/Layouts/Wrapper";
import BoardCp from "../components/List/Board";

const Notice = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");
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
        <div>
            <Wrapper className="wrapper_1400 notice">
                {/* <section className="notice_title_box">
                    <p>
                        <span>주목!</span>
                    </p>
                    <p>
                        <span>따끈따끈한</span>
                    </p>
                    <p>
                        <span>공지</span>
                    </p>
                    <p>
                        <span>확인</span>
                    </p>
                    <p>
                        <span>하세요👋</span>
                    </p>
                </section> */}
                <section className="board_container">
                    <BoardCp />
                </section>
                {/* 공지사항 작성(상세/수정) 페이지(추가완,기능구현 필요) 공지사항 확인
            페이지(게시글 클릭 시 공지글 노출) */}
            </Wrapper>
            <div className="notice_bg">
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
                </div>
            </div>
        </div>
    );
};

export default Notice;
