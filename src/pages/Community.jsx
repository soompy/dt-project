import { useState } from "react";
import Chatbot from "../components/service/Chatbot";
import { MessageOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import FlexBox from "../components/Layouts/Flexbox";
import Modal from "../components/Layouts/Modal";
// import ListCp from "../components/List/List";
import Button from "../components/common/Button/Button";
import Wrapper from "../components/Layouts/Wrapper";
import LazyImage from "../components/LazyImage/LazyImage";
import SliderCp from "../components/Layouts/Slider";
import ProfileArea from "../components/Layouts/Profile";
import Banner from "../components/Layouts/Banner";

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
        imgSrc: "https://i.namu.wiki/i/OhWzIsQCkTLjiJIw0Jts7lFtOGRUAUdBSYEhfqO9k4V0JozaJRu319Y8qrjj8wFA3KnDsk1HBquObr-Lx9MCL3MQSAf1Hc33GU1LWy7LadGvINRe9uXn6nPvK0eybHInwgC7KArECL-et3CUh4UxGQ.webp",
        title: "0",
        txt: "ㅇㅇ",
        link: "/post/0",
    },
    {
        id: 1,
        imgSrc: "https://i.namu.wiki/i/OhWzIsQCkTLjiJIw0Jts7lFtOGRUAUdBSYEhfqO9k4V0JozaJRu319Y8qrjj8wFA3KnDsk1HBquObr-Lx9MCL3MQSAf1Hc33GU1LWy7LadGvINRe9uXn6nPvK0eybHInwgC7KArECL-et3CUh4UxGQ.webp",
        title: "1",
        txt: "ㅇㅇ2",
        link: "/post/1",
    },
    {
        id: 2,
        imgSrc: "https://i.namu.wiki/i/OhWzIsQCkTLjiJIw0Jts7lFtOGRUAUdBSYEhfqO9k4V0JozaJRu319Y8qrjj8wFA3KnDsk1HBquObr-Lx9MCL3MQSAf1Hc33GU1LWy7LadGvINRe9uXn6nPvK0eybHInwgC7KArECL-et3CUh4UxGQ.webp",
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
    { id: 1, title: "상자1", content: "1번", userName: "강유저1", profileUrl: "", profileAlt: "프사1", userGrade: "골드", },
    { id: 2, title: "상자2", content: "2번", userName: "강유저2", profileUrl: "", profileAlt: "프사1", userGrade: "실버", },
    { id: 3, title: "상자3", content: "3번", userName: "강유저3", profileUrl: "", profileAlt: "프사1", userGrade: "브론즈", },
    { id: 4, title: "상자4", content: "4번", userName: "강유저4", profileUrl: "", profileAlt: "프사1", userGrade: "플래티넘", },
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
                        <LazyImage src="https://image.8dogam.com/resized/product/asset/v1/upload/b6f743ddaa124a07af887627258c85fb.jpg?type=big&res=2x&ext=webp" alt="" />
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
            </Wrapper>
            
            <Wrapper className="wrapper_1400">
                {/* 이벤트 배너 */}  
                <Banner 
                    bannerUrl=""
                    bannerAlt="소통이벤트"
                />
            </Wrapper>

            <Wrapper className="wrapper_1400">
                {/* 특정주제 토론방 */}
                <FlexBox useRadio={false}>
                    {boxData.map((box) => (
                        <div key={box.id}>
                            <span className="profile">
                                {/* <LazyImage src="" alt="작성자 프로필 이미지" /> */}
                            </span>
                            <ProfileArea 
                                userName={box.userName}
                                profileUrl={box.profileUrl}
                                profileAlt={box.profileAlt}
                                userGrade={box.userGrade}
                            />
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
                {/* <ListCp titles={titles} items={items}>
                    {{
                        "item.key1": <div>1번박스</div>,
                        "item.key2": <div>2번박스</div>,
                        "item.key3": <div>3번박스</div>,
                    }}
                </ListCp> */}

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
