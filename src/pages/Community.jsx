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
        <div>
            <Wrapper className="wrapper_1400">
                <div className="top community">
                    <h2>text text</h2>
                    <Button size="md" theme="primary_1" label="test"></Button>
                </div>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <FlexBox useRadio={false}>
                    {boxData.map((box) => (
                        <div key={box.id}>
                            <h3>{box.title}</h3>
                            <p>{box.content}</p>
                        </div>
                    ))}
                </FlexBox>
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
            <button onClick={onClickChat}>
                <BotIcon />
            </button>
            {isChatbot && <Chatbot />}
        </div>
    );
};

export default Community;
