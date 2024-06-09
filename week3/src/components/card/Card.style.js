import styled from "styled-components";

export const CardContainer = styled.article`
  position: relative;
`;

export const CardImage = styled.img`
  width: 60%;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
`;

export const FrontImage = styled(CardImage)`
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
  cursor: pointer;

  ${({ $flipped }) =>
    $flipped &&
    `
    transform: rotateX(0deg);
    transition-delay: 0.2s;
  `}
`;

export const BackImage = styled(CardImage)`
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
  cursor: pointer;

  ${({ $flipped }) =>
    $flipped &&
    `
    transform: rotateY(90deg); 
    transition-delay: 0s;
  `}
`;
