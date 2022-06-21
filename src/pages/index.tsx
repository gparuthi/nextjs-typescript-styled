import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Home: NextPage = () => {
  return (
    <Container>
      <Head>test</Head>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </Container>
  );
};

export default Home;
