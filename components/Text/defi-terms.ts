export const tvlText = `
    디파이에 예치되어 있는 자산 규모의 총합 금액. 디파이의 시장규모를 측정할 때 가장 보편적으로 TVL이 사용된다.
`;
export const collateralLoanText = `
    빌리는 사람이 갚지 못하는 경우를 대비해 무언가를 맡기고 자금을 빌리는 것
`;
export const liquidationText = `
    돈을 빌릴 때 맡겨 둔 보증금 수준이 정해진 한계금액에 도달하면 빌렸던 것을 다시 원래대로 되돌리는 것
`;

export const tokenText = `
    코인과 비슷한 의미로 사용되지만, 단순 지불 수단 외에 더 넓은 기능을 가지고 있고 eth, btc와 같은 네트워크 코인과 구분됨. 이더리움에는 대표적으로 유틸리티 코인 등의 용도로 사용되는 분절가능한 erc-20 토큰과 NFT로 불리는 분절 불가능한 erc-721 토큰이 있음
`;

export const defiTerms = [
  {
    name: 'TVL(Total value locked)',
    text: tvlText,
  },
  {
    name: '담보 대출',
    text: collateralLoanText,
  },
  {
    name: '청산(Liquidation)',
    text: liquidationText,
  },
  {
    name: '토큰(Token)',
    text: tokenText,
  },
];
