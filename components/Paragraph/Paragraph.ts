import styled from '@emotion/styled';
import { resetPaddingMargin } from '../styles';

export const Paragraph = styled.p`
  ${resetPaddingMargin}
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 2rem;
  overflow-wrap: break-word;
  font-family:  'Noto Sans KR', sans-serif;
  color: #212529;
`;
