"use client";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      firstName,
      lastName,
      email,
      contactNumber,
      password,
      confirmPassword,
    } = data;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3030/auth/signup", {
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
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      alert("An error occurred during registration.");
      console.error(error);
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
          {...register("email", { required: "Email is required" })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: "First name is required",
            minLength: {
              value: 2,
              message: "Name should be at least 2 characters",
            },
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.firstName && (
          <p className="text-red-500">{`${errors.firstName.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", {
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Name should be at least 2 characters",
            },
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.lastName && (
          <p className="text-red-500">{`${errors.lastName.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Contact Number"
          {...register("contactNumber", {
            required: "Contact number is required",
            maxLength: {
              value: 11,
              message: "Contact number cannot exceed 11 digits",
            },
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.contactNumber && (
          <p className="text-red-500">{`${errors.contactNumber.message}`}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password must be at least 3 characters",
            },
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            minLength: {
              value: 3,
              message: "Password must be at least 3 characters",
            },
          })}
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
