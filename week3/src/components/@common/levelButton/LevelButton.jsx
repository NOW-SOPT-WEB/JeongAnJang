import * as S from "./LevelButton.style";
const LevelButton = ({ onClick }) => {
  const buttonTitle = ["Easy", "Normal", "Hard"];
  return (
    <>
      <S.LevelButtonWrapper>
        {buttonTitle.map((title, index) => (
          <S.Button key={index} type="button" onClick={onClick}>
            <S.LevelButtonTitle>{title}</S.LevelButtonTitle>
          </S.Button>
        ))}
      </S.LevelButtonWrapper>
    </>
  );
};

export default LevelButton;
