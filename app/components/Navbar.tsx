"use client";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  let { userState, userDispatch }: any = useUser();
  console.log(userState);

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
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}
        {/* <div className="dropdown dropdown-end">
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
        <ul className="flex gap-6 font-bold mx-5">
          {userState.user ? (
            <>
              <li>Logout</li>
              <li>Profile</li>
              <li>Cart</li>
            </>
          ) : (
            <li></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
