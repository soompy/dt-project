import { useState } from "react";
import Wrapper from "../Layouts/Wrapper";
import { Wheel } from "react-custom-roulette";
import PropTypes from "prop-types";

const RouletteGame = ({ data }) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const pivot = Math.floor(Math.random() * 99 + 1);
            let stack = 0;

            let newPrizeNumber = null;
            data.some((row, idx) => {
                stack += row.percentage;
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
                        spinDuration={0.2}
                        startingOptionIndex={Math.floor(Math.random() * data.length)}
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={data.map((item) => ({
                            ...item,
                            style: {
                                backgroundColor: item.backgroundColor,
                                textColor: item.textColor,
                            },
                        }))}
                        onStopSpinning={StopSpinning}
                    />
                    <button onClick={handleSpinClick}>SPIN</button>
                    <div>{prizeNumber}</div>
                </div>
            </Wrapper>
        </>
    );
};

RouletteGame.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            option: PropTypes.string.isRequired,
            backgroundColor: PropTypes.string.isRequired,
            textColor: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default RouletteGame;
