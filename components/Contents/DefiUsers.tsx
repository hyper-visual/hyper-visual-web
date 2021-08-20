import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Heading05 } from '@/components/Heading/Heading05';
import { defiTotalUsers, defiTotalUsersProportion } from '@/public/graph';
import { Caption } from '@/components/Caption';

const Section = styled.section`
  max-width: 660px;
  margin: 0 auto;
`;

const GraphSection = styled.section`
  max-width: 1000px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  flex-wrap: wrap;
`;

const GraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export default function DefiUsers() {
  const graphs = [
    {
      url: defiTotalUsers,
      caption: '그림 14. 컴파운드, 아베, 메이커다오 총 사용자(unique address) 수. 데이터 출처: Dune Analytics',
    },
    {
      url: defiTotalUsersProportion,
      caption: '그림 15. 컴파운드, 아베, 메이커다오 총 사용자(unique address) 수 비율. 데이터 출처: Dune Analytic',
    },
  ];
  return (
    <>
      <Section>
        <Heading05>
          컴파운드, 아베, 메이커다오 사용자 수 (unique address)
        </Heading05>
      </Section>
      <Section>
        <Paragraph>
          다음 그래프는 세 디파이 서비스의 사용자 수를 Unique address의 수로 가정하고 그 숫자를 비교해본 것이다. 현재 컴파운드가 가장 많은 사용자를 보유하고 있으며, 그 숫자는 현재 약 32만 명 정도이다.
        </Paragraph>
      </Section>
      <GraphSection>
        {graphs.map((graph) => (
          <GraphWrapper>
            <Image src={graph.url} objectFit="cover" />
            <Caption>{graph.caption}</Caption>
          </GraphWrapper>
        ))}
      </GraphSection>
    </>
  );
}
