import type { NextPage } from "next";
import styled from "styled-components";
import PauseSVG from "../assets/icons/pause.svg";

const Container = styled.div`
  display: flex;
  padding: 10px;
  color: white;
  height: 100vh;
`;
const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid green;
  width: 100vw;
`;
const Content = styled.div`
display: flex;
  width: 500px;
  height: 500px;
  background-color: charcoal;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid red;
  padding: 10px;
  gap: 10px;
`;
export const Pause = styled(PauseSVG)`
  width: 20px;
  height: 20px;
  fill: palevioletred;
`;
const Home: NextPage = () => {
  return (
    <Container>
      <Centered>
        <Content>
          <div>hello world</div>
          <div>
            <Pause />
          </div>
        </Content>
      </Centered>
    </Container>
  );
};

export default Home;
