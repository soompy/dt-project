import { useState } from "react";
import PropTypes from "prop-types";
import Wrapper from "../components/Layouts/Wrapper";
import { Flex, Splitter, Typography } from "antd";
import { Wheel } from "react-custom-roulette";

const Desc = ({ text }) => (
    <Flex justify="center" align="center" style={{ height: "100%" }}>
        <Typography.Title
            type="secondary"
            level={5}
            style={{ whiteSpace: "nowrap" }}
        >
            {text}
        </Typography.Title>
    </Flex>
);

Desc.propTypes = {
    text: PropTypes.string,
};

const data = [
    {
        option: "Apple Vision Pro",
        style: { backgroundColor: "gray", textColor: "white" },
        percentage: 3,
    },
    {
        option: "LG TV",
        style: { backgroundColor: "red", textColor: "white" },
        percentage: 7,
    },
    {
        option: "SAMSUNG 에어컨",
        style: { backgroundColor: "blue", textColor: "white" },
        percentage: 10,
    },
    {
        option: "꽝",
        style: { backgroundColor: "white", textColor: "red" },
        percentage: 80,
    },
];

const Menu = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const pivot = Math.floor(Math.random() * 99 + 1);
            let stack = 0;

            const percentage = data.map((row) => row.percentage);
            let newPrizeNumber = null;

            percentage.some((row, idx) => {
                stack += row;
                if (pivot <= stack) {
                    newPrizeNumber = idx;
                    return true;
                }
            });

            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    const StopSpinning = () => {
        setMustSpin(false);
        alert(`${data[prizeNumber].option}이 당첨되셨습니다`);
    };

    return (
        <div>
            {/* 스크롤 시 그라데이션으로 배경색이 바뀌도록 적용 */}
            {/* Splitter 레이아웃 */}
            <Splitter
                style={{
                    height: 1000,
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
            >
                <Splitter.Panel collapsible className="sp">
                    <Desc text="dddd" />
                </Splitter.Panel>
                <Splitter.Panel>
                    <Splitter layout="vertical">
                        <Splitter.Panel>
                            <Desc text="Top" />
                        </Splitter.Panel>
                        <Splitter.Panel>
                            <Desc text="Bottom" />
                        </Splitter.Panel>
                    </Splitter>
                </Splitter.Panel>
            </Splitter>
            {/* Wrapper와 룰렛 */}
            {/* 좌측에는 선물상자가 열리는 효과, 우측엔 추천 룰렛 */}
            <Wrapper className="wrapper_1400">
                <Flex>
                    <Typography.Title type="secondary" level={5}>
                        dddd
                    </Typography.Title>
                </Flex>
            </Wrapper>
            <Wrapper className="wrapper_1400">
                <div className="present_effect_box">
                    <svg
                        width="200"
                        height="200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="20"
                            y="20"
                            width="160"
                            height="160"
                            fill="#ff6347"
                            stroke="#d32f2f"
                            strokeWidth="4"
                            rx="20"
                            ry="20"
                        />

                        <path
                            d="M20 70 L180 70 Q160 120 80 120 Q160 120 180 170"
                            fill="none"
                            stroke="#8b0000"
                            strokeWidth="4"
                        />

                        <rect
                            x="100"
                            y="80"
                            width="20"
                            height="40"
                            fill="#ff6347"
                        />
                        <rect
                            x="90"
                            y="100"
                            width="40"
                            height="20"
                            fill="#ff6347"
                        />

                        <rect
                            x="25"
                            y="25"
                            width="150"
                            height="150"
                            fill="rgba(0, 0, 0, 0.2)"
                        />
                    </svg>
                </div>

                <div className="roulette">
                    <Wheel
                        spinDuration={0.2} // 스핀 속도
                        startingOptionIndex={Math.floor(
                            Math.random() * data.length
                        )} // 초기 위치 랜덤
                        mustStartSpinning={mustSpin} // 회전 여부
                        prizeNumber={prizeNumber} // 당첨 인덱스
                        data={data} // 룰렛 데이터
                        onStopSpinning={StopSpinning} // 회전 종료 시 동작
                    />
                    <button onClick={handleSpinClick}>SPIN</button>
                    <div>{prizeNumber}</div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Menu;
