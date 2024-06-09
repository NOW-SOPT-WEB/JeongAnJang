import { styled } from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 0%, 0.439);
  z-index: 999;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 10%;
  padding: 2.3rem;
  z-index: 999;
`;

export const Close = styled.button`
  position: absolute;
  background-color: transparent;
  top: 2rem;
  right: 2rem;

  border: none;
  outline: none;

  cursor: pointer;
`;
