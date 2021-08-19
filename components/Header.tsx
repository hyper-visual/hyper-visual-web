import styled from '@emotion/styled';
import Logo from './Logo';
import { headerHeight, headingDefault } from './styles';

const Container = styled.div`
  width: 100%;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #202020;
  position: fixed;
`;

const H4 = styled.h4`
  ${headingDefault}
  font-size: 21px;
  font-family: Arimo, -apple-system, sans-serif;
  color: rgb(21, 21, 21);
  margin-left: 12px;
`;

export default function Header() {
  return (
    <Container>
      <Logo size="60" />
      <H4>
        Hypervisual
      </H4>
    </Container>
  );
}
