import { useState } from "react";
import { ConfigProvider, DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";
import Button from "../components/common/Button/Button";
import { antdTheme } from "../styles/theme";
import Modal from "../components/Layouts/Modal";
import FlexBox from "../components/Layouts/Flexbox";

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  
  return (
    <ConfigProvider theme={antdTheme}>
      <Wrapper className="wrapper-1400">
        <FlexBox />
      </Wrapper>

      <Wrapper className="wrapper-1400"></Wrapper>

      <div>
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
