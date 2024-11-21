import { DatePicker } from "antd";
import Wrapper from "../components/Layouts/Wrapper";

const Home = () => {
  return (
    <div>
      <Wrapper className="wrapper">
        <DatePicker></DatePicker>
      </Wrapper>

      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </div>
  );
};

export default Home;
