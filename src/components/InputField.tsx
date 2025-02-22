"use client";

import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  icon: string;
  showPasswordToggle?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  icon,
  showPasswordToggle,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  return (
    <div className="flex relative flex-col items-start py-3 px-4 w-[540px]  max-w-md tracking-wide leading-snug border border-solid border-neutral-500 rounded-[63px]">
      <label className="absolute left-4 z-0 px-1 py-0 text-base ml-2 rounded-full font-extralight bg-orange-50 text-neutral-500 top-[-10px]">
        {label}
      </label>
      <div className="flex z-0 gap-2 justify-between items-center w-full text-lg text-zinc-600">
        <div className="flex gap-2 items-center self-stretch my-auto w-full">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 self-stretch w-4 aspect-square"
            alt=""
          />
          <input
            type={inputType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-transparent border-none outline-none text-lg ml-1 text-zinc-600 w-full rounded-full"
            placeholder={
              type === "password" ? "Enter your password" : "email@gmail.com"
            }
          />
        </div>
        {showPasswordToggle && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2841088f005c6fcf7af38a78482556c7528d0534495ec513581ceabca4e1af0c"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};
