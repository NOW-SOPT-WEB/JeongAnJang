import { LEVEL } from "../../../constants/constants";
import * as S from "./LevelButton.style";
const LevelButton = (props) => {
  const { handleLevelBtnClick } = props;

  return (
    <>
      <S.LevelButtonWrapper>
        {Object.values(LEVEL).map((title, index) => (
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
