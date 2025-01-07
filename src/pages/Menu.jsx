import PropTypes from "prop-types";
import Wrapper from "../components/Layouts/Wrapper";
import { Flex, Splitter, Typography } from "antd";
import Counter from "../components/Layouts/Counter";

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
    return (
        <div className="menu">
            <Wrapper className="wrapper_1400">
                {/* <h2 className="text_slogan">요즘 핫한 음식</h2> */}
                <p className="text_slogan"><Counter targetValue={200} targetDuration={1} />가지</p>
            </Wrapper>
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
