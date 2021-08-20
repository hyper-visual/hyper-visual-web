import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Heading05 } from '@/components/Heading/Heading05';
import { aave } from '@/public/icon';
import { aaveTvl, aaveTvlLog } from '@/public/graph';
import { Caption } from '@/components/Caption';
import { aaveTextList } from '@/components/Text/aave';

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
`;

export default function Aave() {
  const graphs = [
    {
      url: aaveTvl,
      caption: '그림 8. Aave TVl. 데이터 출처: Defi Pulse',
    },
    {
      url: aaveTvlLog,
      caption: '그림 9. Aave TVl log. USD 기준과 Eth 기준을 같이 보면 실제로 예치 숫자가 늘었는지 확인할 수 있다. 데이터 출처: Defi Pulse',
    },
  ];
  return (
    <>
      <Section>
        <Heading05>
          <Image src={aave} height="30px" width="30px" />
          <span>에이브</span>
        </Heading05>
      </Section>
      {aaveTextList.map((text) => (
        <Section>
          <Paragraph>
            {text}
          </Paragraph>
        </Section>
      ))}
      {graphs.map((graph) => (
        <Section style={{ maxWidth: '500px' }}>
          <Image src={graph.url} layout="responsive" objectFit="cover" />
          <Caption>{graph.caption}</Caption>
        </Section>
      ))}
    </>
  );
}
