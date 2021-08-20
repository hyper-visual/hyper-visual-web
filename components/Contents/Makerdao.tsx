import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Heading05 } from '@/components/Heading/Heading05';
import { makerdao } from '@/public/icon';
import { makerdaoTvl, makerdaoTvlLog } from '@/public/graph';
import { Caption } from '@/components/Caption';
import { makerdaoTextList } from '@/components/Text/makerdao';

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
`;

export default function Makerdao() {
  const graphs = [
    {
      url: makerdaoTvl,
      caption: '그림 10. MakerDao TVl. 데이터 출처: Defi Pulse',
    },
    {
      url: makerdaoTvlLog,
      caption: '그림 11. MakerDao TVl log. USD 기준과 Eth 기준을 같이 보면 실제로 예치 숫자가 늘었는지 확인할 수 있다. 데이터 출처: Defi Pulse',
    },
  ];
  return (
    <>
      <Section>
        <Heading05>
          <Image src={makerdao} height="30px" width="30px" />
          <span>메이커다오</span>
        </Heading05>
      </Section>
      {makerdaoTextList.map((text) => (
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
