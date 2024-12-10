"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  let { userState, userDispatch } = useUserContext();
  const { cartState, cartDispatch } = useCartContext();

  const router = useRouter();

  useEffect(() => {
    console.log(cartState, userState);
  }, [cartState, userState]);

  return (
    <div className="navbar bg-orange-200 mb-16 sticky top-0 z-50">
      <div className="navbar-start">
        <ul className="menu menu-sm flex-row font-bold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/#viewProducts"}>Products</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Totezz</a>
      </div>
      <div className="navbar-end">
        <ul className="flex gap-6 font-bold mx-5">
          {userState.length > 0 ? (
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
                <Link href={"/admin"}>
                  {userState.length > 0 ? userState[0].firstName : "Profile"}
                </Link>
              </li>
              <li>
                {cartState.length > 0 ? (
                  <>
                    <Link href={"/cart"}>*Cart</Link>
                  </>
                ) : (
                  <>
                    <Link href={"/cart"}>Cart</Link>
                  </>
                )}
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
