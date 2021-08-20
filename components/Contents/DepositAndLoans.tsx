import styled from '@emotion/styled';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Heading05 } from '@/components/Heading/Heading05';
import { Caption } from '@/components/Caption';
import Iframe from 'react-iframe';

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
`;

const StyledIframe = styled(Iframe)`
  margin-top: 1.2rem
`;

export default function DepoistAndLoans() {
  const graphs = [
    {
      url: '/graph/html/aave_deposit_loan.html',
      caption: '그림 16. USD 기준 에이브 예치액과 대출액. 데이터 출처: Dune Analytics',
    },
    {
      url: '/graph/html/compound_deposit_loan.html',
      caption: '그림 17. USD 기준 컴파운드 예치액과 대출액. 데이터 출처: Dune Analytics',
    },
    {
      url: '/graph/html/makerdao_deposit_loan.html',
      caption: '그림 18. USD 기준 메이커다오 예치액과 대출액. 데이터 출처: Dune Analytics',
    },
  ];
  return (
    <>
      <Section>
        <Heading05>
          <span>컴파운드, 에이브, 메이커다오 예치 및 대출 토큰 비교</span>
        </Heading05>
      </Section>
      <Section>
        <Paragraph>
          다음은 세 디파이의 예치금, 대출액을 USD 기준으로 나타낸 것이다. 두 수치의 차이를 보면 대출 프로토콜이 어떻게 작동하고 있는지 알 수 있다.
        </Paragraph>
      </Section>
      {graphs.map((graph) => (
        <Section>
          <StyledIframe
            url={graph.url}
            height="300px"
            width="100%"
            frameBorder={0}
          />
          <Caption>
            {graph.caption}
          </Caption>
        </Section>
      ))}
    </>
  );
}
