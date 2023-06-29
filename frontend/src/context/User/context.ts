import React, { createContext } from "react";
import { User } from ".";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<User>;
};
const CONTEXT_DEFAULT_VALUES = {
  setUser: () => {},
  user: "",
};

export const UserContext = createContext<UserContextType>({
  setUser: CONTEXT_DEFAULT_VALUES.setUser,
  user: {
    name: CONTEXT_DEFAULT_VALUES.user,
  },
});
