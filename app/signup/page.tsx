"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchmea = z
  .object({
    email: z.string().email(),
    firstName: z.string().min(2, "Name should be atleast of 2 characters"),
    lastName: z.string().min(2, "Name should be atleast of 2 characters"),
    contactNumber: z.string().max(11),
    password: z.string().min(3, "Password must be atleast 8 characters"),
    confirmPassword: z.string().min(3, "Password must be atleast 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords did not match",
    path: ["confirmPassword"],
  });

type tSignUpschema = z.infer<typeof signUpSchmea>;

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<tSignUpschema>({ resolver: zodResolver(signUpSchmea) });

  const onSubmit = async (data: tSignUpschema) => {
    const { firstName, lastName, email, contactNumber, password } = data;

    // await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      const response = await fetch("http://localhost:7000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          contactNumber: contactNumber,
        }),
      });
      if (response.ok) {
        alert("Registration successful!");
      } else {
        const error = await response.json(); // Extract error message
        alert(error.message); // Show error message
      }
    } catch (error) {
      alert("An error occurred during registration."); // Show generic error message
      console.error(error); // Log error for debugging
    }
    reset();
  };

  return (
    <div className="h-screen">
      <h1 className="text-center my-14">Signup</h1>
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
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          type="text"
          placeholder="First name"
          {...register("firstName")}
          className="input input-bordered w-full max-w-xs mb-2"
        />

        <input
          type="text"
          placeholder="Last name"
          {...register("lastName")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <input
          type="text"
          placeholder="Contact Number"
          {...register("contactNumber")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.contactNumber && (
          <p className="text-red-500">{`${errors.contactNumber.message}`}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}

        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary mt-4 disabled:bg-slate-500"
        >
          Register
        </button>
      </form>
    </div>
  );
}
