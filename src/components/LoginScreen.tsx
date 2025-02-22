"use client";

import React from "react";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#FEF6EF] relative">
      {/* Left: Login Form */}
      <div className="flex-1 flex items-center justify-center mr-[600px] lg:mr-[600px] xl:mr-[600px]">
        <LoginForm />
      </div>

      {/* Right: Styled Div */}
      <div className="w-[90%] max-w-[400px] top-[10%] h-[90%] bg-[#FCE2CE] rounded-t-[394px] shadow-lg absolute right-20 md:right-10 lg:right-20 xl:right-20"></div>
    </div>
  );
};

export default LoginScreen;
