import * as S from "./button.style";

const Button = ({ children, onClick }) => {
  return (
    <S.Wrapper
      style={{
        backgroundColor: "#FF2176",
        color: "#fff",
      }}
      onClick={onClick}
    >
      {children}
    </S.Wrapper>
  );
};

export default Button;
