import { useState } from "react";
import { ConfigProvider, DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";
import Button from "../components/common/Button/Button";
import { antdTheme } from "../styles/theme";
import Modal from "../components/Layouts/Modal";
import FlexBox from "../components/Layouts/Flexbox";
import ListCp from "../components/List/List";
import CheckUi from "../components/common/Checkbox/CheckBox";

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
    imageAlt: "Image 2",
    txt2: "Additional text for item 2",
  },
];

const items = {
  key1: "Item 1 Content",
  key2: "Item 2 Content",
}

const customStyle = {
  group: { margin: "20px 0" },
  radio: { color: "blue", fontWeight: "bold" },
};
const option = [
  { value: 1, label: "Custom A" },
  { value: 2, label: "Custom B" },
  { value: 3, label: "Custom C" },
  { value: 4, label: "Custom D" },
];

// const items = [
//   { key: "key1", content: "Item 1 Content" },
//   { key: "key2", content: "Item 2 Content" },
// ];

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  
  return (
    <ConfigProvider theme={antdTheme}>
      <Wrapper className="wrapper-1400">
        <FlexBox>1</FlexBox>
        <FlexBox>2</FlexBox>
      </Wrapper>

      <Wrapper className="wrapper-1400"></Wrapper>

      <CheckUi options={option} customStyle={customStyle} />

      <div>
        <ListCp titles={titles} items={items}>
          {{ 
            "item.key1": <div>Custom Content for Key 1</div>,
            "item.key2": <div>Custom Content for Key 2</div>,
          }}
        </ListCp>

        <DatePicker />
        
        <Button size="md" theme="primary_1" label="test"></Button>
        
        <>          
            <Button onClick={() => setModalVisible(true)} size="md" theme="primary_1" label="showModal"></Button>
            <Modal 
                visible={isModalVisible} 
                setVisible={setModalVisible}                 
                onClose={() => setModalVisible(false)} 
                isCancelMode={false} 
            />
        </>
      </div>
    </ConfigProvider>
  );
  
};

export default Home;
