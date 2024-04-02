import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "./SignUpSchema";

const SignUpFrom = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisibility] =
    useState(false);
  const [showToast, setShowToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const submitForm = async (formData: any) => {
    console.log("signUp Data");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!isConfirmPasswordVisible);
  };

  console.log("showToast", showToast);

  return (
    <form
      className="flex h-full w-full flex-col justify-center lg:w-[493px] xl:w-[493px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="mb-4 mt-4">
        <input
          className="w-full rounded-xl border bg-white pb-3 pl-3 pr-12 pt-3 text-bodydark"
          placeholder="User Name*"
          // name="name"
          type="username"
          required
          {...register("username")}
        />
      </div>
      <div className="mb-4 mt-4">
        <input
          className="w-full rounded-xl border bg-white pb-3 pl-3 pr-12 pt-3 text-bodydark"
          placeholder="Email*"
          // name="email"
          type="email"
          {...register("email")}
          required
        />
      </div>
      <div className="relative mt-4 w-full">
        <input
          className="w-full rounded-xl border bg-white pb-3 pl-3 pr-12 pt-3 text-bodydark" // Add pr-10 for padding on the right
          placeholder="Password*"
          {...register("password")}
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          required
        />
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
        </span>
      </div>
      <div className="h-5"></div>

      <div className="relative mt-4">
        <input
          className="w-full rounded-xl border bg-white pb-3 pl-3 pr-12 pt-3 text-bodydark" // Add pr-10 for padding on the right
          placeholder="ConfirmPassword*"
          {...register("confirmPassword")}
          name="confirmPassword"
          type={isConfirmPasswordVisible ? "text" : "password"}
        />
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer"
          onClick={toggleConfirmPasswordVisibility}
        >
          {isConfirmPasswordVisible ? "👁️" : "👁️‍🗨️"}
        </span>
      </div>
      <div className="h-5"></div>

      <div className="mt-6 flex items-center justify-center">
        <button
          type="submit"
          className=" hover:bg-blue-gray-800 xxs:rounded-xl w-full cursor-pointer rounded-xl bg-[#32A0EF] p-4 text-[18px] font-semibold text-white"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default SignUpFrom;
