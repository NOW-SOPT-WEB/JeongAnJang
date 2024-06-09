import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { UserInfo } from "../types/userData";

interface MemberContext {
  memberInfo: UserInfo;
  updateMemberInfo: (newInfo: Partial<UserInfo>) => void;
}

const initialMemberInfo = {
  memberId: "",
};

const MemberContext = createContext<MemberContext>({
  memberInfo: initialMemberInfo,
  updateMemberInfo: () => {},
});

export const useMemberContext = () => useContext(MemberContext);

export const MemberContextProvider = ({ children }: PropsWithChildren) => {
  const [memberInfo, setMemberInfo] = useState<UserInfo>(initialMemberInfo);

  const updateMemberInfo = (newInfo: Partial<UserInfo>) => {
    setMemberInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const MemberContextValue = useMemo(
    () => ({
      memberInfo,
      updateMemberInfo,
    }),
    [memberInfo, updateMemberInfo]
  );

  return (
    <MemberContext.Provider value={MemberContextValue}>
      {children}
    </MemberContext.Provider>
  );
};
