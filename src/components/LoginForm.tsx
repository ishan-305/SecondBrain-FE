"use client";

import React, { useState } from "react";
import { InputField } from "./InputField";
import { SocialLogin } from "./SocialLogin";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-1 flex justify-center items-center flex-col my-auto max-w-full px-4"
    >
      <h1 className="text-4xl font-bold text-center text-neutral-700 font-serif">
        Welcome Back!!
      </h1>

      <div className="mt-10">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ec863a95abc33b07f9f5c9455a5ff829494fc1fc7cfb559235ca32d9643181bf"
        />
      </div>

      <div className="mt-6">
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8bfcbeecd6a8819a27fca998880a6dce767825ef36b76cf033e8d27f7bab2521"
          showPasswordToggle
        />
      </div>

      <button
        type="button"
        className="self-end mt-2 mr-12 text-base font-semibold text-right w-[445px] h-[18px] text-zinc-600"
      >
        Forgot Password?
      </button>

      <button
        type="submit"
        className="self-stretch px-2.5 ml-[18px] py-3 w-[432px] h-[74px] mt-8 text-base font-semibold text-yellow-800 bg-orange-100 rounded-[63px]"
      >
        Login
      </button>

      <SocialLogin />

      <div className="flex gap-1 items-center ml-[-50px] self-center mt-4 text-base text-stone-700">
        <p className="opacity-40">Don&apos;t have an account?</p>
        <button
          type="button"
          className="font-semibold text-orange-400"
          onClick={() => {
            router.push("/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
