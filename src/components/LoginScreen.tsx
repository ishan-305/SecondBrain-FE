"use client";

import React from "react";
import { LoginForm } from "./LoginForm";

export const LoginScreen = () => {
  return (
    <main className="flex overflow-hidden flex-wrap gap-10 items-start px-20 pt-44 bg-orange-50 max-md:px-5 max-md:pt-24">
      <LoginForm />

      <section className="flex flex-col justify-center items-start self-start py-56 bg-orange-100 rounded-[394px_394px_0px_0px] max-md:py-24 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/200a20a9a97997e000509a3a56aea3e6ba97036250e17ff63761a74c5a4580dd"
          className="object-contain w-full aspect-[1.01] max-md:max-w-full"
          alt="Decorative login illustration"
        />
      </section>
    </main>
  );
};

export default LoginScreen;
