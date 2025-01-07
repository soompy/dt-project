import { useState } from "react";
import Wrapper from "../Layouts/Wrapper";
import { Wheel } from "react-custom-roulette";

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

const RouletteGame = () => {
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
        <>
            <Wrapper className="wrapper_1400">
                <div className="present_effect_box"></div>

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
        </>
    );
};

export default RouletteGame;
