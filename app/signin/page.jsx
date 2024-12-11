"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";

export default function SignInPage() {
  const { userState, userDispatch } = useUserContext();
  const router = useRouter();
  // const { userState, userDispatch } = value;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch("http://localhost:3030/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const { firstName, lastName, token, isAdmin } = await response.json();

      if (response.ok) {
        console.log(firstName, lastName, token);

        userDispatch({
          type: "SET_USER",
          payload: {
            email: email,
            firstName: firstName,
            lastName: lastName,
            token: token,
            isAdmin: isAdmin,
          },
        });
        alert("Signin successful!");
        router.push("/");
      } else {
        const error = await response.json(); // Extract error message
        alert(error.message); // Show error message
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }

    reset();
  };

  return (
    <div className="h-screen my-16 mb-32">
      <h1 className="text-center my-14">Sign In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mx-auto max-w-md gap-2"
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {/* {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )} */}

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {/* {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )} */}

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary mt-4 disabled:bg-slate-500"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
