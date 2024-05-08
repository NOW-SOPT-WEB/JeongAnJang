import styled from "styled-components";
import Button from "../components/@common/Button";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";
import { CommonInput } from "../components/@common/Input";
import { useState } from "react";

const LoginPage = () => {
  const { goMypage, goSignup } = useEasyNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <LoginPageWrapper>
        <Title>Login</Title>
        <img
          src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201608/04/htm_2016080484837486184.jpg"
          alt="마동석로그인"
          style={{ width: "50%", height: "auto" }}
        />
        <InputWrapper>
          <InputContainer>
            <SubTitle>Id :</SubTitle>
            <CommonInput onChange={handleIdChange} />
            {!id && <ErrorMessage>Id를 입력해주세요</ErrorMessage>}
          </InputContainer>
          <InputContainer>
            <SubTitle>Password :</SubTitle>
            <CommonInput onChange={handlePasswordChange} />
            {!password && (
              <ErrorMessage>Password를 입력해주세요</ErrorMessage>
            )}
          </InputContainer>
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={goSignup}>회원가입</Button>
          <Button onClick={goMypage}>내 정보</Button>
        </ButtonWrapper>
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
  gap: 5rem;
  margin-top: 2rem;
`;

const LoginPageWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "column" })};
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 10rem;
`;

const InputWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
  gap: 2rem;
`;

const InputContainer = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
`;

const SubTitle = styled.h2`
  font-size: 2rem;
`;

const ErrorMessage = styled.p`
  color: red;
`;
