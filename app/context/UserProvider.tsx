"use client";
import React, { useReducer } from "react";
import { UserContext } from "./UserContext";

const userReducer = (userState: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return { ...userState, user: action.payload };
    case "UNSET_USER":
      return { ...userState, user: null };
    default:
      return userState;
  }
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, userDispatch] = useReducer(userReducer, { user: null });
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
