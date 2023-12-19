"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  let { userState, userDispatch }: any = useUser();
  console.log(userState);
  const router = useRouter();

  return (
    <div className="navbar bg-orange-200">
      <div className="navbar-start">
        <ul className="menu menu-sm flex-row font-bold">
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">
          {userState.user ? userState.user.firstName : "Totezz"}
        </a>
      </div>
      <div className="navbar-end">
        <ul className="flex gap-6 font-bold mx-5">
          {userState.user ? (
            <>
              <li>
                <a
                  onClick={() => {
                    userDispatch({ type: "UNSET_USER" });
                    router.push("/signin");
                  }}
                >
                  Logout
                </a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Cart</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/signin"}>Sign In</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
