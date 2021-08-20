import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Heading05 } from '@/components/Heading/Heading05';
import { aaveAssetLog, compoundAssetLog } from '@/public/graph';
import { Caption } from '@/components/Caption';

const Section = styled.section`
  max-width: 660px;
  margin: 0 auto;
`;

export default function AssetsInDefi() {
  const graphs = [
    {
      url: aaveAssetLog,
      caption: '그림 12. 아베에 예치된 Dai와 wETH, wBTC 수 로그. 데이터 출처: Defi Pulse',
    },
    {
      url: compoundAssetLog,
      caption: '그림 13. 컴파운드에 예치된 Dai와 wETH, wBTC 수 로그. 데이터 출처: Defi Pulse',
    },
  ];
  return (
    <>
      <Section>
        <Heading05>
          컴파운드와 아베에 예치된 토큰들
        </Heading05>
      </Section>
      <Section>
        <Paragraph>
          아래 두 그래프는 컴파운드와 아베에 예치된 토큰 중 비중이 높은 Dai,
          wETH(이더리움을 erc-20에 매핑한 토큰), wBTC(비트코인을 erc-20에 매핑한 토큰)의 수를 나타낸 것이다.
          스테이블 코인인 Dai와 변동성이 큰 wETH, wBTC가 예치되는 양상을 비교할 수 있다.
        </Paragraph>
      </Section>
      {graphs.map((graph) => (
        <Section style={{ maxWidth: '500px' }}>
          <Image src={graph.url} layout="responsive" objectFit="cover" />
          <Caption>{graph.caption}</Caption>
        </Section>
      ))}
    </>
  );
}
