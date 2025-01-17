import PropTypes from "prop-types";
import Wrapper from "../components/Layouts/Wrapper";
import { Flex, Splitter, Typography } from "antd";
import Counter from "../components/Layouts/Counter";
import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const FoodRankingChart = ({ data, chartType }) => {
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff6f61", "#a29bfe"];

    // 득표수 기준으로 데이터 정렬
    const sortedData = [...data].sort((a, b) => b.votes - a.votes);

    return (
        <ResponsiveContainer width="100%" height={300}>
            {chartType === "bar" && (
                <BarChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="votes" fill="#8884d8" />
                </BarChart>
            )}
            {chartType === "line" && (
                <LineChart data={sortedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="votes" stroke="#8884d8" />
                </LineChart>
            )}
            {chartType === "pie" && (
                <PieChart>
                    <Pie
                        data={sortedData}
                        dataKey="votes"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {sortedData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            )}
        </ResponsiveContainer>
    );
};

FoodRankingChart.propTypes = {
    data: PropTypes.array.isRequired,
    chartType: PropTypes.string.isRequired,
};

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

const Menu = () => {
    const [chartType, setChartType] = useState("bar");

    const foodRankingData = [
        { name: "떡볶이", votes: 50 },
        { name: "치킨", votes: 120 },
        { name: "피자", votes: 100 },
        { name: "라면", votes: 80 },
        { name: "삼겹살", votes: 60 },
    ];

    return (
        <div className="menu">
            <Wrapper className="wrapper_1400 main_txt">
                <h2 className="text_slogan">요즘 핫한 음식</h2>
                <p className="text_slogan">
                    <p className="text_gradient">
                        <Counter targetValue={200} targetDuration={1} />
                    </p>
                </p>
            </Wrapper>

            {/* 순위차트 */}
            <Wrapper className="wrapper_1400">
                <h3>음식 순위</h3>
                <div style={{ marginBottom: 20 }}>
                    <label htmlFor="chartType" style={{ marginRight: 10 }}>
                        차트 형태 선택:
                    </label>
                    <select
                        id="chartType"
                        value={chartType}
                        onChange={(e) => setChartType(e.target.value)}
                    >
                        <option value="bar">막대 차트</option>
                        <option value="line">라인 차트</option>
                        <option value="pie">파이 차트</option>
                    </select>
                </div>
                <FoodRankingChart data={foodRankingData} chartType={chartType} />
            </Wrapper>

            {/* 스크롤 시 그라데이션으로 배경색이 바뀌도록 적용 */}
            {/* Splitter 레이아웃 */}
            <Splitter
                style={{
                    height: 600,
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


            {/* 게임 모음 페이지 분리 */}
            {/* 좌측에는 선물상자가 열리는 효과, 우측엔 추천 룰렛 */}
            <Wrapper className="wrapper_1400">
                <Flex>
                    <Typography.Title type="secondary" level={5}>
                        dddd
                    </Typography.Title>
                </Flex>
            </Wrapper>     
        </div>
    );
};

export default Menu;
