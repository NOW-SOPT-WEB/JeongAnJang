import * as S from "./LevelButton.style";
const LevelButton = (props) => {
  const { handleLevelBtnClick } = props;

  const buttonTitle = ["Easy", "Normal", "Hard"];

  return (
    <>
      <S.LevelButtonWrapper>
        {buttonTitle.map((title, index) => (
          <S.Button
            key={index}
            type="button"
            onClick={() => handleLevelBtnClick(title)}
          >
            <S.LevelButtonTitle>{title}</S.LevelButtonTitle>
          </S.Button>
        ))}
      </S.LevelButtonWrapper>
    </>
  );
};

export default LevelButton;
