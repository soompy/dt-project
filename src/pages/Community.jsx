import { useState } from "react";
import Chatbot from "../components/service/Chatbot";
import { MessageOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import FlexBox from "../components/Layouts/Flexbox";
import Modal from "../components/Layouts/Modal";
import ListCp from "../components/List/List";
import Button from "../components/common/Button/Button";
import Wrapper from "../components/Layouts/Wrapper";

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
              <h2 className="text_slogan">도란도란 디디디</h2>
            </Wrapper>
            <Wrapper className="wrapper_1400">
                <div className="top">
                    <div className="left_box">
                        <h2>Discover your soul food</h2>
                        <Button size="md" theme="primary_1" label="test"></Button>
                    </div>
                    <div className="right_box">
                        <img src="https://image.8dogam.com/resized/product/asset/v1/upload/b6f743ddaa124a07af887627258c85fb.jpg?type=big&res=2x&ext=webp" alt="" />
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="wrapper_1400">
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
            <button className="btn_chat" onClick={onClickChat}>
                <BotIcon />
            </button>
            {isChatbot && <Chatbot />}
        </div>
    );
};

export default Community;
