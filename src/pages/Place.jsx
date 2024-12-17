// import Swipercp from "../components/Layouts/Swipercp";
// import Calendarcp from "../components/Layouts/Calendar";
import { useState } from "react";
import { DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";
import FlexBox from "../components/Layouts/Flexbox";
import Modal from "../components/Layouts/Modal";
import ListCp from "../components/List/List";
import Button from "../components/common/Button/Button";

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

const Place = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        // 인터렉션 참고 https://gsap.com/community/forums/topic/28175-how-to-use-scrolltrigger-change-texts/
        <div className="place">
            {/* 팝업스토어 맛집 놀이공간 파티룸 콘텐츠 체험 전시회 이벤트 등등 */}
            <DatePicker />
            <Wrapper className="wrapper_1400">
                <FlexBox>1</FlexBox>
                <FlexBox>2</FlexBox>
            </Wrapper>

            <Wrapper className="wrapper_1400">
                <ListCp titles={titles} items={items}>
                    {{
                        "item.key1": <div>1번박스</div>,
                        "item.key2": <div>2번박스</div>,
                        "item.key3": <div>3번박스</div>,
                    }}
                </ListCp>

                <Button size="md" theme="primary_1" label="test"></Button>

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
        </div>
    );
};

export default Place;
