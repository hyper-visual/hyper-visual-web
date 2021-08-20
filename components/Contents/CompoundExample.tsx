import styled from '@emotion/styled';
import Image from 'next/image';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Caption } from '@/components/Caption';
import liquidationExample from '@/public/liquidation_example.png';
import { Heading03 } from '../Heading/Heading03';

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
`;

export default function CompoundExample() {
  return (
    <>
      <Section>
        <Heading03>
          디파이 사용 사례 뜯어 보기 - Compound 대출부터 청산까지
        </Heading03>
      </Section>
      <Section>
        <Paragraph>
          모든 데이터가 저장되는 블록체인의 특성, 그리고 스마트 컨트랙트를 이용하는 이더리움의 특성 때문에 디파이를 사용한 사례를 직접 찾아서 분석해볼 수 있다.
          다음은 컴파운드 대출 서비스를 이용한 한 사용자를 추적한 내용이다.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          이더리움 지갑 주소 0x3d38c7371f30db0136c41c6add0f7a4c09d93d8d를 가진 사용자를 추적해 보자.
          해당 사용자는 2021년 7월 22일 컴파운드에서 6개의 트랜잭션을 일으켰다.
          우선 사용자는 10,000 Tether USD(USDT)를 컴파운드에 예금(mint)하면서 470,657.70302021 cUSDT를 가져갔다.
          이 과정에서 컴파운드의 Comptroller 컨트랙트의 Enter Markets 함수를 실행시켜 리스크 계산에 편입시킬 자신의 자산을 설정하였다.
          이후 컴파운드로부터 0.3 ETH를 대출(Borrow)하였다.
          그리고 1,000 USD Coin(USDC) 예금(mint)하고 그 반대급부로 45,278.43614944 cUSDC 가져간 후,
          25 UNI를 대출(Borrow)하였다.
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          해당 사용자의 자산에 대한 청산은 2021년 8월 8일 이루어졌다.
          <a
            href="https://etherscan.io/tx/0xa875ed9359e072c1534b216cdf507e705eb4d0382ab71e8039223a7a9eb283be"
            style={{ color: 'black' }}
          >
            (트랜잭션 링크)
          </a>
          사용자가 0.3 ETH를 대출한 7월 22일 오전 3시 42분에 1 이더리움의 가격은 2,024.74달러였다.
          청산이 이루어진 8월 8일 오전 8시 55분에 1 이더리움의 가격은 3,013.75 달러로 대략 48.8% 상승한 상황이었다.
          따라서 사용자의 보증금(collateral)의 가치에서 차입금의 가치가 차지하는 비중이 더 커져서 사용자 자산에 대한 청산이 이루어진 것으로 보인다.
          청산자 0xe0090ec6895c087a393f0e45f1f85098a6c33bef는 LiquidateBorrow 함수를 실행시켜서
          0.148719310283435179 ETH를 컴파운드에대신 갚고 사용자의 보증금인 504.283569 USDC를 청산시켰다.
        </Paragraph>
      </Section>
      <Section style={{ maxWidth: '500px' }}>
        <Image src={liquidationExample} layout="responsive" objectFit="cover" />
        <Caption>그림 19. 컴파운드 대출 - 청산 사례를 그림으로 나타낸 것이다.</Caption>
      </Section>
    </>
  );
}
