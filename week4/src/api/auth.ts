import { LoginAuthReq } from "../types/auth";
import { post } from "./client";

export const loginAuth = async ({
  authenticationId,
  password,
}: LoginAuthReq) => {
  const { data } = await post(
    `${import.meta.env.VITE_APP_BASE_URL}/member/login`,
    {
      authenticationId,
      password,
    }
  );

  return data;
};
