import styled from "styled-components";
import { CommonInput } from "../components/@common/Input";
import CommonSubTitle from "../components/@common/SubTitle";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";
import Button from "../components/@common/Button";
import useEnterInput from "../hooks/@common/useEnterInput";
import { post } from "../api/client";

const SignupPage = () => {
  const { goBack, goMypage } = useEasyNavigate();
  const {
    id,
    password,
    nickname,
    phone,
    handleIdChange,
    handlePasswordChange,
    handleNickNameChange,
    handlePhoneNumberChange,
  } = useEnterInput();

  const authenticationId = id;

  const postData = async () => {
    try {
      console.log("전달되는 데이터:", { id, password, nickname, phone });

      const response = await post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId,
          password,
          nickname,
          phone,
        }
      );
      goMypage();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignupPageWrapper>
      <InputContainer>
        <CommonSubTitle>ID</CommonSubTitle>
        <CommonInput value={id} onChange={handleIdChange} />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>Password</CommonSubTitle>
        <CommonInput
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>닉네임</CommonSubTitle>
        <CommonInput value={nickname} onChange={handleNickNameChange} />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>전화번호</CommonSubTitle>
        <CommonInput value={phone} onChange={handlePhoneNumberChange} />
      </InputContainer>
      <ButtonContainer>
        <Button type="submit" onClick={postData}>
          회원가입
        </Button>
        <Button type="button" onClick={goBack}>
          뒤로가기
        </Button>
      </ButtonContainer>
    </SignupPageWrapper>
  );
};

export default SignupPage;

const SignupPageWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "column" })};
  gap: 5rem;
`;

const InputContainer = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
  gap: 2rem;
`;

const ButtonContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: "center", justify: "center" })};
  gap: 2rem;
`;
