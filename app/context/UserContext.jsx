import { createContext, useContext } from "react";

const UserContext = createContext({});

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Value must be used within a UserProvider");
  }
  return context;
};
export { UserContext, useUserContext };
