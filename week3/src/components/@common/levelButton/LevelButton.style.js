import styled from "styled-components";

export const LevelButtonWrapper = styled.section`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: "center", justify: "center" })}
  background-color: ${({ theme }) => theme.colors.white};
  height: 10rem;
  gap: 5rem;
`;

export const Button = styled.button`
  border-radius: 9rem;
  height: 4rem;
`;

export const LevelButtonTitle = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body};
`;
