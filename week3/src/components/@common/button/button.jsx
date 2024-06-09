import * as S from "./button.style";

const Button = ({ children, onClick }) => {
  return <S.ButtonWrapper onClick={onClick}>{children}</S.ButtonWrapper>;
};

export default Button;
