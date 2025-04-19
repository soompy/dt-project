import RouletteGame from "../components/service/Roulette";
import Wrapper from "../components/Layouts/Wrapper";
import Tab from "../components/common/Tab/Tab";
import Table from "../components/common/Table/Table"
import { useState } from "react";
import users from "../data/mocks/users";
import products from "../data/mocks/products"
import orders from "../data/mocks/orders"
import reviews from "../data/mocks/reviews"

const Game = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabNames = ['회원', '상품', '주문', '리뷰'];
    const tableData = [users, products, orders, reviews];

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

                {/* 탭과 테블 뎐동 연습 */}
                <Tab 
                    tabList={tabNames}
                    activeTab={activeTab} 
                    onTabClick={setActiveTab} 
                />

                {tableData.map((data, index) => index === activeTab ? (
                    <Table key={index} data={data} />
                ): null
            )}    
        </div>
    );
};

export default Game;
