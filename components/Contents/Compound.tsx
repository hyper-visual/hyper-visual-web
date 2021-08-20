import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Heading05 } from '@/components/Heading/Heading05';
import { compound } from '@/public/icon';
import { compountTextList } from '@/text/compound';
import { compoundTvl, compoundTvlLog } from '@/public/graph';
import { Caption } from '@/components/Caption';

const Section = styled.section`
  max-width: 660px;
  margin: 0 auto;
`;

export default function Compound() {
  const graphs = [
    {
      url: compoundTvl,
      caption: '그림 6. 컴파운드 TVl. 데이터 출처: Defi Pulse',
    },
    {
      url: compoundTvlLog,
      caption: '그림 7. 컴파운드 TVl log. USD 기준과 Eth 기준을 같이 보면 실제로 예치 숫자가 늘었는지 확인할 수 있다. 데이터 출처: Defi Pulse',
    },
  ];
  return (
    <>
      <Section>
        <Heading05>
          <Image src={compound} height="30px" width="30px" />
          <span>컴파운드</span>
        </Heading05>
      </Section>
      {compountTextList.map((text) => (
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
