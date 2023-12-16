"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

let isSignedIn = false;
const userReducer = (userState: any, action: any) => {
  if (isSignedIn) {
    return [
      ...userState,
      {
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        isSignedIn: isSignedIn,
      },
    ];
  } else {
    // isSignedIn = !isSignedIn;
    console.log(isSignedIn);
    return console.log("Ber kore dilam");
  }
};

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type tSignInSchema = z.infer<typeof signInSchema>;

export default function signInPage() {
  const [userState, dispatch] = useReducer(userReducer, []);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<tSignInSchema>({ resolver: zodResolver(signInSchema) });

  const onsubmit = async (data: tSignInSchema) => {
    // console.log("ekhane");
    const { email, password } = data;

    try {
      const response = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const { firstName, lastName, token }: any = await response.json();

      if (response.ok) {
        isSignedIn = !isSignedIn;

        dispatch({
          type: isSignedIn,
          payload: { email: email, firstName: firstName, lastName: lastName },
        });
        // navigate("/app/page.tsx");
        alert("Signin successful!");
      } else {
        const error = await response.json(); // Extract error message
        alert(error.message); // Show error message
      }
    } catch (error) {
      console.log("Ekhane chole ashtese");
    }
    reset();
  };

  console.log(userState);

  return (
    <>
      <h1 className="text-center my-14">Sign In</h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col items-center mx-auto max-w-md gap-2"
      >
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary mt-4 disabled:bg-slate-500"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
