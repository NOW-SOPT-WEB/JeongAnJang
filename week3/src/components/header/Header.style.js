import styled from "styled-components";

export const HeaderWrapper = styled.header`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "column" })};
  background-color: ${({ theme }) => theme.colors.pink};
  height: 20rem;
  gap: 2rem;
`;

export const HeaderTitle = styled.h1`
  ${({ theme }) => theme.fonts.title};
`;

export const GameState = styled.div`
  ${({ theme }) => theme.fonts.body};
`;
