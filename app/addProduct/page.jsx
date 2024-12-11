"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";

function AddProductPage() {
  const { userState } = useUserContext();

  useEffect(() => {
    console.log(userState);
  }, [userState]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, description, price, stock, images } = data;

    try {
      const response = await fetch("http://localhost:3030/product/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userState[0].token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: parseInt(price, 10),
          stock: parseInt(stock, 10),
          images: images.split(",").map((image) => image.trim()),
        }),
      });

      if (response.ok) {
        alert("Product added successful!");
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
      <h1 className="text-center my-14">Add Product</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mx-auto max-w-md gap-2"
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Product name is required",
            minLength: {
              value: 2,
              message: "Name should be at least 2 characters",
            },
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.name && (
          <p className="text-red-500">{`${errors.name.message}`}</p>
        )}

        <input
          type="text"
          placeholder="Description"
          {...register("description", {
            required: "Product description is required",
            minLength: {
              value: 10,
              message: "Description should be of at least 10 characters",
            },
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.description && (
          <p className="text-red-500">{`${errors.description.message}`}</p>
        )}

        <input
          type="text"
          placeholder="Stock"
          {...register("stock", {
            required: "Number of this item is required",
            validate: (value) =>
              !isNaN(value) || "Stock must be a valid number",
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.stock && (
          <p className="text-red-500">{`${errors.stock.message}`}</p>
        )}

        <input
          type="text"
          placeholder="Price"
          {...register("price", {
            required: "Price is required",
            validate: (value) =>
              !isNaN(value) || "Price must be a valid number",
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />
        {errors.price && (
          <p className="text-red-500">{`${errors.price.message}`}</p>
        )}
        <input
          type="text"
          placeholder="Image Links (comma-separated)"
          {...register("images", {
            required: "At least one image link is required",
          })}
          className="input input-bordered w-full max-w-xs mb-2"
        />

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

export default AddProductPage;
