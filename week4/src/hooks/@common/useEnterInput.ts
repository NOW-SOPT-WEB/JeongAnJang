import { useState } from "react";

const useEnterInput = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [phone, setPhone] = useState("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value;
    // 숫자와 '-'를 제외한 문자 제거
    const cleanedPhoneNumber = phoneNumber.replace(/[^\d-]/g, "");
    // '-'를 제외한 모든 숫자 추출
    const numbersOnly = cleanedPhoneNumber.replace(/-/g, "");
    // 전화번호 형식에 맞게 '-' 추가
    const formattedPhoneNumber = numbersOnly.replace(
      /(\d{3})(\d{3,4})(\d{4})/,
      "$1-$2-$3"
    );
    setPhone(formattedPhoneNumber);
  };
  return {
    id,
    password,
    nickname,
    phone,
    handleIdChange,
    handlePasswordChange,
    handleNickNameChange,
    handlePhoneNumberChange,
  };
};

export default useEnterInput;
