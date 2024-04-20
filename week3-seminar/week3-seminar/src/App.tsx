import { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [buttonState, setButtonState] = useState(true);
  return (
    <AppWrapper>
      <Title>실습을 해봅시다!</Title>
      <SubTitle>새싹이들!</SubTitle>
      <ButtonWrapper
        state={buttonState}
        onClick={() => setButtonState(!buttonState)}
      >
        버튼
      </ButtonWrapper>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.main`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "column" })};
`;

const Title = styled.h1`
  font-size: 3rem;
`;
const SubTitle = styled.h2`
  font-size: 2rem;
`;
const ButtonWrapper = styled.button<{ state: boolean }>`
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  background-color: ${({ state }) => (state ? "yellow" : "green")};
  color: black;
`;
