import ReactPlayer from "react-player";
import Button from "../components/@common/Button";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";
import styled from "styled-components";

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const { goMypage, goSignup } = useEasyNavigate();
  return (
    <div>
      <ReactPlayer url="https://www.youtube.com/shorts/mZPkoLfdGQg" />
      <ButtonWrapper>
        <Button onClick={goSignup}>회원가입</Button>
        <Button onClick={goMypage}>내 정보</Button>
      </ButtonWrapper>
    </div>
  );
};

export default MainPage;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
  gap: 5rem;
`;
