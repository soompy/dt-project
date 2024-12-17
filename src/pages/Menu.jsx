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
    const [mustSpin, setMustSpin] = useState(false); // 룰렛 애니메이션 상태
    const [prizeNumber, setPrizeNumber] = useState(0); // 당첨 인덱스

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
            <Wrapper className="wrapper_1400">
                <Flex>
                    <Typography.Title type="secondary" level={5}>
                        dddd
                    </Typography.Title>
                </Flex>
            </Wrapper>

            <Wrapper className="wrapper_1400">
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
            </Wrapper>
        </div>
    );
};

export default Menu;
