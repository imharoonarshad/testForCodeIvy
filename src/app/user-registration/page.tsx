"use client";
import React, { useState } from "react";
import SignInFrom from "./SignInFrom";
import registerUser from "../../../public/images/registerUser.svg";
import Image from "next/image";
import SignUpFrom from "./SignUpForm";

const UserRegistration = () => {
  const [activeTab, setActiveTab] = useState("SignIn");
  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-screen lg:flex xl:flex w-full bg-white ">
      <div className="w-[100%] flex flex-row justify-between  ">
        <div className="lg:w-[50%] justify-center xl:w-[50%] md:w-[60%] lg:py-24 xl:py-24 md:py-24 py-42.5 w-[80%] flex flex-col lg:gap-7 xl:gap-7 gap-5">
          {/* <div className="w-full flex justify-center flex-col"> */}
          <div className="flex flex-col justify-center gap-4 items-center w-full">
            <p className="  text-h3Web font-semibold">Welcome Back</p>
            <p className="text-paragraph">
              Welcome Back, Please enter your details.
            </p>
          </div>
          <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto ">
             
              <div className="relative flex flex-col bg-white w-[550px]  border border-[#edecec] rounded-lg shadow-lg outline-none focus:outline-none">
             
                <div className="flex bg-[#F0F0F2]">
                  <button
                    className={`flex-auto text-lg font-semibold ${
                      activeTab === "SignIn" ? "text-black rounded-md bg-white" : "text-gray-500 bg-[#F0F0F2]"
                    } border-b-2 ${
                      activeTab === "SignIn"
                        ? "border-blue-500"
                        : "border-transparent"
                    } focus:outline-none`}
                    onClick={() => handleTabChange("SignIn")}
                  >
                    SignIn
                  </button>
                  <button
                    className={`flex-auto p-4 text-lg font-semibold ${
                      activeTab === "SignUp" ? "text-black rounded-md bg-white" : "text-gray-500 bg-[#F0F0F2]"
                    } border-b-2 ${
                      activeTab === "SignUp"
                        ? "border-blue-500"
                        : "border-transparent"
                    } focus:outline-none`}
                    onClick={() => handleTabChange("SignUp")}
                  >
                    SignUp
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div
                    className={`${activeTab === "SignIn" ? "block" : "hidden"}`}
                  >
                    <SignInFrom />
                  </div>
                  <div
                    className={`${activeTab === "SignUp" ? "block" : "hidden"}`}
                  >
                    <SignUpFrom />
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="xl:visible lg:visible invisible">
          <Image
            src={registerUser}
            className="w-[100%] h-[100%]"
            alt={"registerUser"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
