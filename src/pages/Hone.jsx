import { ConfigProvider, DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";
import Button from "../components/common/Button/Button";
import { antdTheme } from "../styles/theme";


const Home = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <Wrapper className="wrapper">
        <DatePicker></DatePicker>
        <Button type="primary"></Button>
      </Wrapper>

      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </ConfigProvider>
  );
};

export default Home;
