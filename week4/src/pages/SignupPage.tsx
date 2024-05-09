import styled from "styled-components";
import { CommonInput } from "../components/@common/Input";
import CommonSubTitle from "../components/@common/SubTitle";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";
import Button from "../components/@common/Button";
import useEnterInput from "../hooks/@common/useEnterInput";
import { post } from "../api/client";
import { MESSAGE } from "../constants/message";

const SignupPage = () => {
  const { goBack, goHome } = useEasyNavigate();
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
    if (!id) {
      alert(MESSAGE.ENTER_EMPTY_ID);
      return;
    }
    if (!password) {
      alert(MESSAGE.ENTER_EMPTY_PASSWORD);
      return;
    }
    if (!nickname) {
      alert(MESSAGE.ENTER_EMPTY_NICKNAME);
      return;
    }
    if (!phone) {
      alert(MESSAGE.ENTER_EMPTY_PHONE);
      return;
    }

    try {
      const response = await post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId,
          password,
          nickname,
          phone,
        }
      );
      console.log(response);
      alert(MESSAGE.SUCCESS_SIGNUP);
      goHome();
      // goMypage(path);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignupPageWrapper>
      <InputContainer>
        <CommonSubTitle>ID</CommonSubTitle>
        <CommonInput value={id} onChange={handleIdChange} $inputValue={!!id} />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>Password</CommonSubTitle>
        <CommonInput
          value={password}
          type="password"
          onChange={handlePasswordChange}
          $inputValue={!!password}
        />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>닉네임</CommonSubTitle>
        <CommonInput
          value={nickname}
          onChange={handleNickNameChange}
          $inputValue={!!nickname}
        />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>전화번호</CommonSubTitle>
        <CommonInput
          value={phone}
          onChange={handlePhoneNumberChange}
          $inputValue={!!phone}
          maxLength={13}
        />
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
