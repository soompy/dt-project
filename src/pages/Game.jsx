import RouletteGame from "../components/service/Roulette";
import Wrapper from "../components/Layouts/Wrapper";

const Game = () => {
    const rouletteData = [
        {
            option: "Apple Vision Pro",
            backgroundColor: "gray",
            textColor: "white",
            percentage: 3,
        },
        {
            option: "LG TV",
            backgroundColor: "red",
            textColor: "white",
            percentage: 7,
        },
        {
            option: "SAMSUNG 에어컨",
            backgroundColor: "blue",
            textColor: "white",
            percentage: 10,
        },
        {
            option: "꽝",
            backgroundColor: "white",
            textColor: "red",
            percentage: 80,
        },
    ];

    return (
        <div className="game">
            <section className="visual">
                <Wrapper className="wrapper_1400">
                    <h2>jj</h2>
                </Wrapper>
            </section>  

            <RouletteGame data={rouletteData} />
                    {/* 벽돌깨기
                    뱀꼬리잡기 등 */}          
        </div>
    );
};

export default Game;
