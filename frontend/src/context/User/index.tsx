"use client";
import React, { useState } from "react";
import { UserContext } from "./context";

type UserProviderProps = {
  children: React.ReactNode;
};
export interface User {
  name: string;
}
export const USER_DEFAULT_STATE = {
  name: "",
};
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({ name: USER_DEFAULT_STATE.name });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
