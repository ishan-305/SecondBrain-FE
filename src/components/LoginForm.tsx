"use client";

import React, { useState } from "react";
import { InputField } from "./InputField";
import { SocialLogin } from "./SocialLogin";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col my-auto max-md:max-w-full"
    >
      <h1 className="text-5xl font-bold leading-none text-center text-neutral-700 max-md:max-w-full max-md:text-4xl">
        Welcome Back!!
      </h1>

      <div className="mt-16 max-md:mt-10">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ec863a95abc33b07f9f5c9455a5ff829494fc1fc7cfb559235ca32d9643181bf"
        />
      </div>

      <div className="mt-12 max-md:mt-10">
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
        className="self-end mt-6 text-xl font-semibold tracking-wide leading-snug text-right text-zinc-600"
      >
        Forgot Password?
      </button>

      <button
        type="submit"
        className="gap-2.5 self-stretch px-2.5 py-5 mt-20 text-2xl font-semibold tracking-wide leading-snug text-yellow-800 whitespace-nowrap bg-orange-100 rounded-[128px] max-md:mt-10"
      >
        Login
      </button>

      <SocialLogin />

      <div className="flex gap-1 items-center self-center mt-6 max-w-full text-lg tracking-wide leading-snug w-[274px]">
        <p className="self-stretch my-auto opacity-40 text-stone-700">
          Don&apos;t have an account?
        </p>
        <button
          type="button"
          className="self-stretch my-auto font-semibold text-orange-400"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
