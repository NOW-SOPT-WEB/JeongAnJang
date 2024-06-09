const STATIC = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
};

const DYNAMIC = {
  MYPAGE: "/mypage/:id",
};

export const PATH = {
  ...STATIC,
  ...DYNAMIC,
} as const;
