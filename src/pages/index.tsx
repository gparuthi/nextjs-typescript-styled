import type { NextPage } from "next";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  padding: 10px;
  color: white;l
`;
const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  border: 3px solid green;
`;
const Home: NextPage = () => {
  return (
    <Container>
      <Centered>hello world</Centered>
    </Container>
  );
};

export default Home;
