import styled from "styled-components";

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) =>
    mixin.inlineFlexBox({ align: "center", justify: "center" })}
  ${({ theme: { fonts } }) => fonts.body}

  padding: 1rem;
  border-radius: 9.9rem;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.pink};
  color: ${({ theme: { colors } }) => colors.white};
  outline: none;
`;
