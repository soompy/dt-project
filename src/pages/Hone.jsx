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
    imageAlt: "Image 3",
    txt2: "Additional text for item 3",
  },
];

const items = {
  key1: "Item 1 Content",
  key2: "Item 2 Content",
}

const radioOptions = [
  { value: "o1", label: "Custom A" },
  { value: "o2", label: "Custom B" },
  { value: "o3", label: "Custom C" },
  { value: "o4", label: "Custom D" },
];
const checkboxOptions = [
  { value: "k1", label: "m A" },
  { value: "k2", label: "m B" },
  { value: "k3", label: "m C" },
  { value: "k4", label: "m D" },
]

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
            
      <CheckUi 
        options={radioOptions}        
        type="radio" 
      />
      
      <CheckUi
        options={checkboxOptions}
        type="checkbox"
      />

      <div>
        <ListCp titles={titles} items={items}>
          {{ 
            "item.key1": <div>1번박스</div>,
            "item.key2": <div>2번박스</div>,
            "item.key3": <div>3번박스</div>,
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
