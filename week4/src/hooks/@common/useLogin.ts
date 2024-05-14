import { useState } from "react";
import { useMemberContext } from "../../context/MemberContext";
import useEasyNavigate from "./useEasyNavigate";
import useErrorMessage from "./useErrorMessage";
import { MESSAGE } from "../../constants/message";
import { loginAuth } from "../../api/auth";

const useLogin = () => {
  const { goHome } = useEasyNavigate();
  const { updateMemberInfo } = useMemberContext();
  const {
    idErrorMessage,
    passwordErrorMessage,
    setIdErrorMessage,
    setPasswordErrorMessage,
  } = useErrorMessage();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIdErrorMessage("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordErrorMessage("");
  };

  const handleLogin = async () => {
    if (id && password) {
      try {
        const response = await loginAuth({ authenticationId: id, password });
        alert(MESSAGE.SUCCESS_LOGIN);
        updateMemberInfo({
          memberId: response.headers.location,
        });
        goHome();
      } catch (error) {
        alert(error.response.data.message);
        console.log(error);
      }
    } else if (id && !password) {
      alert(MESSAGE.ENTER_EMPTY_PASSWORD);
      setPasswordErrorMessage(MESSAGE.ENTER_EMPTY_ID);
    } else if (!id && password) {
      alert(MESSAGE.ENTER_EMPTY_ID);
      setIdErrorMessage(MESSAGE.ENTER_EMPTY_PASSWORD);
    } else {
      alert(MESSAGE.FAIL_LOGIN);
      setIdErrorMessage(MESSAGE.ENTER_EMPTY_ID);
    }
  };

  return {
    handleIdChange,
    handlePasswordChange,
    handleLogin,
    idErrorMessage,
    passwordErrorMessage,
  };
};

export default useLogin;
