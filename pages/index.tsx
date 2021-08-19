import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Iframe from 'react-iframe';
import etherImage from '../public/ether-image.jpg';
import compountImage from '../public/compound.png';
import Header from '../components/Header';
import { headerHeight } from '../components/styles';
import { Heading01 } from '../components/Heading/Heading01';
import { Heading04 } from '../components/Heading/Heading04';
import { Heading06 } from '../components/Heading/Heading06';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { intro01, intro02, intro03 } from '../Text/intro';
import { Heading03 } from '../components/Heading/Heading03';
import { defiProsList } from '../Text/defi-pros';
import { Heading05 } from '../components/Heading/Heading05';
import { defiTerms } from '../Text/defi-terms';
import { historyTextList } from '../Text/history';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 800px; */
  padding: calc(${headerHeight} + 30px) 40px 80px 40px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;

const StyledHeading01 = styled(Heading01)`
  margin-top: 32px;
`;

const Article = styled.article`
  margin-top: 62px;
  width: 100%;
  padding: 40px 15px;
`;

const Section = styled.section`
  max-width: 660px;
  margin: 0 auto;
`;

const StyledIframe = styled(Iframe)`
  margin-top: 1.2rem
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
        <StyledImage src={etherImage} height="100" width="140" />
        <StyledHeading01>
          그림으로 보는 디파이(DeFi)
        </StyledHeading01>
        <Heading04>데이터 시각화를 통해 이해하는 이더리움 네트워크와 디파이</Heading04>
        <Heading06>By 금진섭, 류승준, 신우철, 이혜민, 추연욱</Heading06>
        <Article>
          <Section>
            <Paragraph>
              {intro01}
            </Paragraph>
          </Section>
          <Section>
            <Paragraph>
              {intro02}
            </Paragraph>
          </Section>
          <Section>
            <Paragraph>
              {intro03}
            </Paragraph>
          </Section>
          <Section>
            <Heading03>
              디파이의 장점
            </Heading03>
          </Section>
          {defiProsList.map((pro) => (
            <>
              <Section>
                <Heading05>
                  {pro.title}
                </Heading05>
              </Section>
              {pro.text.map((text) => (
                <Section>
                  <Paragraph>
                    {text}
                  </Paragraph>
                </Section>
              ))}
            </>
          ))}
          <Section>
            <Heading03>
              디파이 용어 정리
            </Heading03>
            {defiTerms.map((term) => (
              <>
                <Section>
                  <Heading05>
                    {term.name}
                  </Heading05>
                </Section>
                <Paragraph>
                  {term.text}
                </Paragraph>
              </>
            ))}
          </Section>
          <Section>
            <Heading03>
              이더리움과 디파이의 역사
            </Heading03>
          </Section>
          {historyTextList.map((text) => (
            <Section>
              <Paragraph>
                {text}
              </Paragraph>
            </Section>
          ))}
          <Heading06>여기 디파이 역사 그림 넣기</Heading06>
          <Section>
            <Heading05>
              이더리움 트랜잭션과 디파이 트랜잭션
            </Heading05>
            <Heading06>여기 트랜잭션 그래프 4개? 넣기</Heading06>
          </Section>
          <Section>
            <Heading03>
              아베(AAVE)와 컴파운드(Compound) 로 디파이 살펴 보기
            </Heading03>
          </Section>
          <Section>
            <Paragraph>
              담보 대출을 제공하는 가장 큰 규모의 세 디파이 서비스(컴파운드(Compound), 에이브(AAVE), 메이커다오(MakerDAO))를 살펴 보자.
            </Paragraph>
          </Section>
          <Section>
            <Heading05>
              <Image src={compountImage} height="30px" width="30px" />
              <span>컴파운드</span>
            </Heading05>
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/tvl_usd.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/tvl_eth.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/compound_tvl.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/compound_asset.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/aave_tvl.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/aave_asset.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/maker_tvl.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/total_user.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
          <Section>
            <StyledIframe
              title="tvl"
              url="/total_users_proportion.html"
              height="300px"
              width="100%"
              frameBorder={0}
            />
          </Section>
        </Article>
      </Container>
    </>
  );
}
