import { useState } from "react";
import Chatbot from "../components/service/Chatbot";
import { MessageOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import FlexBox from "../components/Layouts/Flexbox";
import Modal from "../components/Layouts/Modal";
import ListCp from "../components/List/List";
import Button from "../components/common/Button/Button";
import Wrapper from "../components/Layouts/Wrapper";
import SliderCp from "../components/Layouts/Slider";
import ProfileArea from "../components/Layouts/Profile";

const titles = [
    {
        text: "글1",
        title: "제목1",
        titleClass: "title-class-1",
        itemClass: "item-class-1",
        value: "key1",
        imageSrc: "image1.jpg",
        imageAlt: "Image 1",
        title2: "Sub Title 1",
        txt2: "Additional text for item 1",
    },
    {
        text: "글2",
        title: "제목2",
        titleClass: "title-class-2",
        itemClass: "item-class-2",
        value: "key2",
        imageSrc: "image2.jpg",
        imageAlt: "Image 2",
        txt2: "Additional text for item 2",
    },
    {
        text: "글3",
        title: "제목3",
        titleClass: "title-class-2",
        itemClass: "item-class-2",
        value: "key2",
        imageSrc: "image2.jpg",
        imageAlt: "Image 3",
        txt2: "Additional text for item 3",
    },
];

const bestContents = [
    {
        id: 0,
        // imgSrc: 
        title: "0",
        txt: "ㅇㅇ",
        link: "/post/0",
    },
    {
        id: 1,
        // imgSrc: 
        title: "1",
        txt: "ㅇㅇ2",
        link: "/post/1",
    },
    {
        id: 2,
        // imgSrc: 
        title: "2",
        txt: "ㅇㅇ3",
        link: "/post/2",
    }
]

const items = {
    key1: "Item 1 Content",
    key2: "Item 2 Content",
};

const BotIcon = styled(MessageOutlined)`
    font-size: 30px;
    color: #007bff;

    &:hover {
        color: #fff;
    }
`;

const boxData = [
    { id: 1, title: "상자1", content: "1번" },
    { id: 2, title: "상자2", content: "2번" },
    { id: 3, title: "상자3", content: "3번" },
    { id: 4, title: "상자4", content: "4번" },
];

const Community = () => {
    const [isChatbot, setIsChatbot] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const onClickChat = () => {
        setIsChatbot((prev) => !prev);
    };

    return (
        <div className="community">     
            <Wrapper className="wrapper_1400">
              {/* <h2 className="text_slogan">도란도란 디디디</h2> */}
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <div className="top">
                    <div className="left_box">
                        {/* <h2>Discover your soul food</h2> */}
                        <Button size="md" theme="primary_1" label="test"></Button>
                    </div>
                    <div className="right_box">
                        {/* <img src="https://image.8dogam.com/resized/product/asset/v1/upload/b6f743ddaa124a07af887627258c85fb.jpg?type=big&res=2x&ext=webp" alt="" /> */}
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                {/* 인기게시물 - 최신/인기 질문 목록 소팅 기능 추가 & 답변 수 및 조회수 표시 */}
                <section className="best_contents">
                    <SliderCp bannerList={bestContents} />
                </section>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                {/* 안기유저 랭크 - 추천 사용자 프로필 노출(인기 회원 정보 게시물과 댓글 랭크 및 활동점수(글 작성수, 댓글 수, 좋아요 수 등 표시) */}
                <ProfileArea
                    profileUrl="data:image/jpeg;base64,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"
                    profileAlt="플필"
                    userName="nam"
                    userGrade="best"
                />
            </Wrapper>
            
            <Wrapper className="wrapper_1400">
                {/* 이벤트 배너 */}                           
            </Wrapper>

            <Wrapper className="wrapper_1400">
                {/* 특정주제 토론방 */}
                <FlexBox useRadio={false}>
                    {boxData.map((box) => (
                        <div key={box.id}>
                            <span className="profile">
                                <img src="" alt="작성자 프로필 이미지" />
                            </span>
                            <div className="cont_info">
                                <h3>{box.title}</h3>
                                <p>{box.content}</p>
                            </div>
                        </div>
                    ))}
                </FlexBox>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                {/* 챌린지 게시판 */}

            </Wrapper>

            <Wrapper className="wrapper_1400">
                <ListCp titles={titles} items={items}>
                    {{
                        "item.key1": <div>1번박스</div>,
                        "item.key2": <div>2번박스</div>,
                        "item.key3": <div>3번박스</div>,
                    }}
                </ListCp>

                <>
                    <Button
                        onClick={() => setModalVisible(true)}
                        size="md"
                        theme="primary_1"
                        label="showModal"
                    ></Button>
                    <Modal
                        visible={isModalVisible}
                        setVisible={setModalVisible}
                        onClose={() => setModalVisible(false)}
                        isCancelMode={false}
                    />
                </>
            </Wrapper>

            <Button 
                size="sm"
                theme="primary_1"
                label="글쓰기"
            />

            <button className="btn_chat" onClick={onClickChat}>
                <BotIcon />
            </button>
            
            {isChatbot && <Chatbot />}
        </div>
    );
};

export default Community;
