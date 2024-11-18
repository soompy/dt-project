import ContainerBox from "../components/container/ContainerBox";

const Home = () => {
  return (
    <div>
      <ContainerBox>
        <h2>컴포넌트 가져와</h2>
        <p>유후</p>
      </ContainerBox>

      <ContainerBox></ContainerBox>
      <ContainerBox></ContainerBox>
      <ContainerBox></ContainerBox>
    </div>
  );
};

export default Home;
