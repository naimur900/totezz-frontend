"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";

// const signUpSchmea = z
//   .object({
//     email: z.string().email(),
//     firstName: z.string().min(2, "Name should be atleast of 2 characters"),
//     lastName: z.string().min(2, "Name should be atleast of 2 characters"),
//     contactNumber: z.string().max(11),
//     password: z.string().min(8, "Password must be atleast 8 characters"),
//     confirmPassword: z.string().min(8, "Password must be atleast 8 characters"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords did not match",
//     path: ["confirmPassword"],
//   });

// type tSignUpschema = z.infer<typeof signUpSchmea>;

export default function SignInPage() {
  const value = useUser();
  const router = useRouter();
  const { userState, userDispatch }: any = value;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
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
        console.log(firstName, lastName, token);

        userDispatch({
          type: "SET_USER",
          payload: { email: email, firstName: firstName, lastName: lastName },
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
    <>
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
          Register
        </button>
      </form>
    </>
  );
}
