import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';
import sample from '../../public/sample.png';
import Header from '../../components/Header';
import { headerHeight } from '../../components/styles';
import { Heading01 } from '../../components/Heading01';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 800px; */
  padding: calc(${headerHeight} + 80px) 80px 80px 40px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export default function Index() {
  return (
    <>
      <Head>
        <title>Hyper Visual Report</title>
        <meta name="description" content="Aave calculator" />
      </Head>
      <Header />
      <Container>
        <Heading01>
          그림으로 보는 디파이
        </Heading01>
        <h4>나의 담보와 대출을 입력하면 대출한 토큰과 </h4>
        {/* <Image src={sample} height="300" /> */}
      </Container>
    </>
  );
}
