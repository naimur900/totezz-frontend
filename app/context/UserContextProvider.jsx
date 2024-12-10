"use client";
import React, { useEffect, useReducer } from "react";
import { UserContext } from "./UserContext";

const userReducer = (userState, action) => {
  switch (action.type) {
    case "SET_USER":
      if (!action.payload) {
        return userState;
      }
      return [...userState, action.payload];
    case "UNSET_USER":
      return [];
    default:
      return userState;
  }
};

const UserContextProvider = ({ children }) => {
  const intialUserState = [];
  const [userState, userDispatch] = useReducer(userReducer, intialUserState);

  useEffect(() => {
    let storedUser = localStorage.getItem("user");
    let user = JSON.parse(storedUser);

    if (storedUser) {
      for (let i = 0; i < storedUser.length; i++) {
        userDispatch({
          type: "SET_USER",
          payload: user[i],
        });
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
