"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  let { userState, userDispatch }: any = useUser();
  const value: any = useCart();
  const { cartState, cartDispatch } = value;

  console.log(userState);
  const router = useRouter();

  return (
    <div className="navbar bg-orange-200">
      <div className="navbar-start">
        <ul className="menu menu-sm flex-row font-bold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <a>Products</a>
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
                {cartState.cart.length > 0 ? (
                  <>
                    <Link href={"/cart"}>
                      {/* <FontAwesomeIcon icon="faFaceRelieved" /> */}
                      *Cart
                    </Link>
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
