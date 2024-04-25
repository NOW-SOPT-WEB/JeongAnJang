import Button from "../@common/button/button";
import * as S from "./Header.style";
/**@todo 컴포넌트 합성으로 해볼까 말까
 *
 * 버튼에 onClick 달기, 게임 상태에 따라 props 내려줘야할듯
 */
export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.HeaderTitle>OB들 서비스 맞추기</S.HeaderTitle>
      <Button>RESET</Button>
      <S.GameState>0 / 5</S.GameState>
    </S.HeaderWrapper>
  );
}
