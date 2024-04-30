import * as S from "./button.style";

const Button = ({ children, onClick }) => {
  return (
    <S.ButtonWrapper
      style={{
        backgroundColor: "#FF2176",
        color: "#fff",
      }}
      onClick={onClick}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
