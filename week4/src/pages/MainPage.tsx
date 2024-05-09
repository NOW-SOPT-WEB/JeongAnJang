import ReactPlayer from "react-player";
import leeJinChu from "../assets/이진츄.mp4";

const MainPage = () => {
  return (
    <>
      <h1 style={{ fontSize: "9rem" }}>아래 두 영상의 차이점은?</h1>
      <ReactPlayer url="https://www.youtube.com/shorts/mZPkoLfdGQg" />
      <ReactPlayer url={leeJinChu} playing controls />
    </>
  );
};

export default MainPage;
