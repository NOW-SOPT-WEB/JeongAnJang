import styled from "styled-components";
import { CommonInput } from "../components/@common/Input";
import CommonSubTitle from "../components/@common/SubTitle";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";
import Button from "../components/@common/Button";
import useEnterInput from "../hooks/@common/useEnterInput";
import { post } from "../api/client";
import { MESSAGE } from "../constants/message";
import { useMemberContext } from "../context/MemberContext";
import { useEffect, useRef, useState } from "react";

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
    validatePassword,
  } = useEnterInput();
  const { updateMemberInfo } = useMemberContext();
  const [emptyId, setEmptyId] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);
  const [emptyNickname, setEmptyNickname] = useState(false);
  const [emptyPhone, setEmptyPhone] = useState(false);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const nicknameInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const authenticationId = id;

  const postData = async () => {
    if (!id) {
      alert(MESSAGE.ENTER_EMPTY_ID);
      setEmptyId(true);
      idInputRef.current?.focus();
      return;
    }
    if (!password) {
      alert(MESSAGE.ENTER_EMPTY_PASSWORD);
      setEmptyPassword(true);
      passwordInputRef.current?.focus();
      return;
    }
    if (validatePassword(password)) {
      alert(MESSAGE.NOT_FOLLOW_PASSWORD_FORMAT);
      return;
    }
    if (!nickname) {
      alert(MESSAGE.ENTER_EMPTY_NICKNAME);
      setEmptyNickname(true);
      nicknameInputRef.current?.focus();
      return;
    }
    if (!phone) {
      alert(MESSAGE.ENTER_EMPTY_PHONE);
      setEmptyPhone(true);
      phoneInputRef.current?.focus();
      return;
    }

    try {
      const response = await post(
        `${import.meta.env.VITE_APP_BASE_URL}/member/join`,
        {
          authenticationId: id,
          password,
          nickname,
          phone,
        }
      );
      console.log(response);
      updateMemberInfo({
        memberId: response.headers.location,
      });
      alert(MESSAGE.SUCCESS_SIGNUP);
      goHome();
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (emptyId && idInputRef.current) {
      idInputRef.current.focus();
    }
    if (emptyPassword && passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
    if (emptyNickname && nicknameInputRef.current) {
      nicknameInputRef.current.focus();
    }
    if (emptyPhone && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [emptyId, emptyPassword, emptyNickname, emptyPhone]);

  return (
    <SignupPageWrapper>
      <InputContainer>
        <CommonSubTitle>ID</CommonSubTitle>
        <CommonInput
          value={id}
          onChange={handleIdChange}
          $inputValue={!emptyId}
          ref={idInputRef}
        />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>Password</CommonSubTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <CommonInput
            value={password}
            type="password"
            onChange={handlePasswordChange}
            $inputValue={!emptyPassword}
            ref={passwordInputRef}
          />
          <ValidateSection>
            {MESSAGE.NOT_FOLLOW_PASSWORD_FORMAT}
          </ValidateSection>
        </div>
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>닉네임</CommonSubTitle>
        <CommonInput
          value={nickname}
          onChange={handleNickNameChange}
          $inputValue={!emptyNickname}
          ref={nicknameInputRef}
        />
      </InputContainer>

      <InputContainer>
        <CommonSubTitle>전화번호</CommonSubTitle>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <CommonInput
            value={phone}
            onChange={handlePhoneNumberChange}
            $inputValue={!emptyPhone}
            maxLength={13}
            ref={phoneInputRef}
          />
          <ValidateSection>{MESSAGE.NOT_FOLLOW_PHONE_FORMAT}</ValidateSection>
        </div>
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

const ValidateSection = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: "center", justify: "center" })};
  color: blue;
  font-size: 1rem;
`;
