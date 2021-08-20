import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import {
  ethereumTransaction, aaveTransaction, compoundTransaction, makerdaoTransaction,
} from '@/public/graph';
import { Paragraph } from '../Paragraph/Paragraph';
import { Heading03 } from '../Heading/Heading03';
import { Heading05 } from '../Heading/Heading05';
import { Caption } from '../Caption';

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
`;

export default function Transactions() {
  return (
    <>
      <Section>
        <Heading05>
          이더리움 트랜잭션과 디파이 트랜잭션
        </Heading05>
      </Section>
      <Section>
        <Image src={ethereumTransaction} layout="responsive" objectFit="cover" />
        <Caption>그림 2. 이더리움 전체 트랜잭션 수. 데이터 출처: Google BigQuery에서 제공하는 트랜잭션 데이터</Caption>
      </Section>
      <Section>
        <Image src={compoundTransaction} layout="responsive" objectFit="cover" />
        <Caption>
          그림 3. 컴파운드 전체 트랜잭션 수.
          Comptroller 컨트랙트와 cToken 컨트랙트들로 전송되는 트랜잭션 수를 합해서 얻은 값.
          데이터 출처: Google BigQuery에서 제공하는 트랜잭션 데이터
        </Caption>
      </Section>
      <Section>
        <Image src={aaveTransaction} layout="responsive" objectFit="cover" />
        <Caption>
          그림 4. 에이브 전체 트랜잭션 수.
          Aave 코어 컨트랙트들과 aToken 컨트랙트들로 전송되는 트랜잭션 수를 합해서 얻은 값.
          데이터 출처: Google BigQuery에서 제공하는 트랜잭션 데이터
        </Caption>
      </Section>
      <Section>
        <Image src={makerdaoTransaction} layout="responsive" objectFit="cover" />
        <Caption>
          그림 5. 메이커다오 전체 트랜잭션 수.
          MakerDao 코어 컨트랙트들에 전송되는 트랜잭션 수를 합해서 얻은 값.
          데이터 출처: Google BigQuery에서 제공하는 트랜잭션 데이터
        </Caption>
      </Section>
      <Section>
        <Heading03>
          에이브(AAVE)와 컴파운드(Compound), 메이커다오(MakerDao)로 보는 디파이
        </Heading03>
      </Section>
      <Section>
        <Paragraph>
          담보 대출을 제공하는 가장 큰 규모의 세 디파이 서비스(컴파운드(Compound), 에이브(AAVE), 메이커다오(MakerDAO))를 살펴 보자.
        </Paragraph>
      </Section>
    </>
  );
}
