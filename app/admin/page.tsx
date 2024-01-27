"use client";
import { useUser } from "../context/UserContext";
import UserInfo from "./UserInfo";

const page = async () => {
  let { userState, userDispatch }: any = useUser();
  let userData: any = null;
  //   console.log(userState);
  if (userState.user !== null) {
    const response = await fetch("http://localhost:5000/user/getone", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userState.user.token}`,
      },
      cache: "no-store",
    });

    if (response.ok) {
      userData = await response.json();
      //   console.log(userData);
    } else {
      const error = await response.json();
      console.log(error.message);
    }
  }

  return <>{userData ? <UserInfo userData={userData} /> : <></>}</>;
};

export default page;
