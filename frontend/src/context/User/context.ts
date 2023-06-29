import React, { createContext } from "react";
import { User } from ".";

type UserContextType = {
  user: User;
  setUser: React.Dispatch<User>;
};

export const UserContext = createContext<UserContextType>(null);
