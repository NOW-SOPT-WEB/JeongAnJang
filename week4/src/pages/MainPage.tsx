import ReactPlayer from "react-player";
import leeJinChu from "../assets/이진츄.mp4";
import Button from "../components/@common/Button";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";
import { useMemberContext } from "../context/MemberContext";
import styled from "styled-components";

const MainPage = () => {
  const { goMypage, goSignup } = useEasyNavigate();
  const { memberInfo } = useMemberContext();
  console.log(memberInfo);
  return (
    <>
      <h1 style={{ fontSize: "9rem" }}>아래 두 영상의 차이점은?</h1>
      <ReactPlayer url="https://www.youtube.com/shorts/mZPkoLfdGQg" />
      {/* muted={true} => 자동재생 기능  */}
      {/* loop => 무한재생 기능 */}
      <ReactPlayer url={leeJinChu} playing controls muted={true} loop />
      <ButtonContainer>
        <Button onClick={() => goMypage(memberInfo.memberId)}>내 정보</Button>
        <Button onClick={goSignup}>회원가입</Button>
      </ButtonContainer>
    </>
  );
};

export default MainPage;

export const ButtonContainer = styled.section`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
`;
