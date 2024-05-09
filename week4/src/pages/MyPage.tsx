import { useEffect, useState } from "react";
import { get, patch } from "../api/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommonSubTitle from "../components/@common/SubTitle";
import { UserData } from "../types/userData";
import Input from "../components/@common/Input";
import Button from "../components/@common/Button";
import useEnterInput from "../hooks/@common/useEnterInput";
import { MESSAGE } from "../constants/message";
import useEasyNavigate from "../hooks/@common/useEasyNavigate";

const MyPage = () => {
  const memberId = useParams();
  const [userData, setUserData] = useState<UserData | null>(null);
  const {
    id,
    password,
    nickname,
    handleIdChange,
    handlePasswordChange,
    handleNickNameChange,
  } = useEnterInput();

  const { goHome } = useEasyNavigate();

  const previousPassword = id;
  const newPassword = password;
  const newPasswordVerification = nickname;

  useEffect(() => {
    const getData = async () => {
      console.log("memberId", memberId);

      try {
        const response = await get(
          `${import.meta.env.VITE_APP_BASE_URL}/member/info`,
          { headers: { memberId: memberId.id } }
        );
        setUserData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [memberId]);

  const handleSubmit = async () => {
    try {
      const response = await patch(
        `${import.meta.env.VITE_APP_BASE_URL}/member/password`,
        {
          previousPassword: previousPassword,
          newPassword: newPassword,
          newPasswordVerification: newPasswordVerification,
        },
        {
          headers: { memberId: memberId.id },
        }
      );
      console.log(response);
      alert(MESSAGE.SUCCESS_NEW_PASSWORD);
      goHome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyPageWrapper>
      {userData && (
        <>
          <UserInfoContainer>
            <CommonSubTitle customStyle={{ color: "#ff0000" }}>
              Id
            </CommonSubTitle>
            <CommonSubTitle>{userData.authenticationId} </CommonSubTitle>
          </UserInfoContainer>

          <UserInfoContainer>
            <CommonSubTitle customStyle={{ color: "#ff0000" }}>
              nickname
            </CommonSubTitle>
            <CommonSubTitle>{userData.nickname} </CommonSubTitle>
          </UserInfoContainer>

          <UserInfoContainer>
            <CommonSubTitle customStyle={{ color: "#ff0000" }}>
              phone
            </CommonSubTitle>
            <CommonSubTitle>{userData.phone} </CommonSubTitle>
          </UserInfoContainer>

          <details>
            <summary style={{ cursor: "pointer", fontSize: "3rem" }}>
              비밀번호 변경
            </summary>
            <Ul>
              <Li>
                <UserInfoContainer>
                  <CommonSubTitle customStyle={{ color: "#ff0000" }}>
                    기존 비밀번호
                  </CommonSubTitle>
                  <Input value={previousPassword} onChange={handleIdChange} />
                </UserInfoContainer>
              </Li>
              <Li>
                <UserInfoContainer>
                  <CommonSubTitle customStyle={{ color: "#ff0000" }}>
                    새로운 비밀번호
                  </CommonSubTitle>
                  <Input value={newPassword} onChange={handlePasswordChange} />
                </UserInfoContainer>
              </Li>
              <Li>
                <UserInfoContainer>
                  <CommonSubTitle customStyle={{ color: "#ff0000" }}>
                    비밀번호 확인
                  </CommonSubTitle>
                  <Input
                    value={newPasswordVerification}
                    onChange={handleNickNameChange}
                  />
                </UserInfoContainer>
              </Li>
            </Ul>
            <Button type="submit" onClick={handleSubmit}>
              비밀번호 변경
            </Button>
          </details>
          <Button type="button" onClick={goHome}>
            홈으로
          </Button>
        </>
      )}
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "column" })};
  gap: 4rem;
`;

const UserInfoContainer = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({ direction: "row" })};
  gap: 3rem;
`;

const Ul = styled.ul``;

const Li = styled.li`
  font-size: 2rem;
`;
