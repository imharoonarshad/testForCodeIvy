import React, { useState } from "react";
import { SigninSchema } from "./SigninSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/context/AuthContext";

const handleLoginSubmit = async (reqBody: any) => {
  console.log("userName password ", reqBody);

  try {
    const response = await fetch(
      "https://ims-devsandbox.codeivy.io/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      },
    );

    const data = await response.json();

    if (response.ok) {
      console.log("Sign-in successful", data);
      return data;
    } else {
      console.log("Sign-in failed", data.error);
    }
  } catch (error) {
    console.error("Error signing in user:", error);
  }
  return null;
};

const SignInFrom = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const router = useRouter();
  const { setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const submitForm = async (formData: { email: string; password: string }) => {
    try {
      const data = await handleLoginSubmit({
        email: formData.email,
        password: formData.password,
      });

      console.log('data',data.data.token)

      if (data?.data.token) {
        setToken(data.data.token); // Set token in context
        localStorage.setItem('token', data.data.token); // Set token in local storage
        router.push('/'); // Redirect to homepage
      }
    } catch (error) {
      console.error('Error signing in user:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <form
      className="flex h-full w-full flex-col justify-center lg:w-[493px] xl:w-[493px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="mb-4 mt-4">
        <input
          className="w-full rounded-xl border bg-white pb-3 pl-3 pr-12 pt-3 text-bodydark"
          placeholder="Email*"
          // name="email"
          type="email"
          {...register("email")}
          required
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "10px" }} className="mt-1">
            {errors.email.message}
          </p>
        )}
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
      <div className="h-5">
        {errors.password && (
          <p style={{ color: "red", fontSize: "10px" }} className="mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-center">
        <button
          type="submit"
          className=" hover:bg-blue-gray-800 xxs:rounded-xl w-full cursor-pointer rounded-xl bg-[#32A0EF] p-4 text-[18px] font-semibold text-white"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignInFrom;
