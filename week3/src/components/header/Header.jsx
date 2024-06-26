import Button from "../@common/button/button";
import * as S from "./Header.style";

export default function Header(props) {
  const { resetGame, turns, requiredMatch } = props;

  return (
    <S.HeaderWrapper>
      <S.HeaderTitle>OB들 서비스 맞추기</S.HeaderTitle>
      <Button onClick={resetGame}>RESET</Button>
      <S.GameState>
        {turns} / {requiredMatch}
      </S.GameState>
    </S.HeaderWrapper>
  );
}
