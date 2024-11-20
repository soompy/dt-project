import { DatePicker } from "antd";
import ContainerBox from "../components/container/ContainerBox";

const Home = () => {
  return (
    <div>
      <ContainerBox>
        <h2>컴포넌트 가져와</h2>
        <p>유후</p>
        장소추천
        메뉴추천 (점메추 저메추)
        <DatePicker></DatePicker>
      </ContainerBox>

      <ContainerBox></ContainerBox>
      <ContainerBox></ContainerBox>
      <ContainerBox></ContainerBox>
    </div>
  );
};

export default Home;
