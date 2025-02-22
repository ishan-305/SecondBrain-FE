import React from "react";

export const SocialLogin = () => {
  return (
    <section className="flex flex-col items-center">
      <p className="mt-8 text-lg tracking-wide leading-snug text-center opacity-40 text-stone-700">
        - or -
      </p>
      <div className="flex gap-5 justify-between mt-6 max-w-full w-[270px]">
        <button
          className="flex gap-2.5 items-center p-4 bg-orange-50 h-[58px] rounded-[100px] w-[58px]"
          aria-label="Social login option 1"
        >
          <div className="flex w-7 min-h-7" />
        </button>
        <button
          className="flex gap-2.5 items-center p-4 bg-orange-50 h-[58px] rounded-[100px] w-[58px]"
          aria-label="Social login option 2"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/314c494833171cd8528be60fd8426690013c19bed06eed080293c12a37cb6667"
            className="object-contain w-7 aspect-square"
            alt=""
          />
        </button>
        <button
          className="flex gap-2.5 items-center p-4 bg-orange-50 h-[58px] rounded-[100px] w-[58px]"
          aria-label="Social login option 3"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d61965d973900085d791a11982729dfb2dabd2b8e11929a79a8846c0d75d43"
            className="object-contain w-7 aspect-square"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};
