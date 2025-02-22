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
    <div className="flex relative flex-col items-start py-6 px-8 w-full tracking-wide leading-snug border border-solid border-neutral-500 rounded-[63px]">
      <label className="absolute left-14 z-0 px-4 text-2xl font-medium bg-orange-50 text-neutral-500 top-[-17px]">
        {label}
      </label>
      <div className="flex z-0 gap-4 justify-between items-center w-full text-2xl text-zinc-600">
        <div className="flex gap-4 items-center self-stretch my-auto min-w-60">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
            alt=""
          />
          <input
            type={inputType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-transparent border-none outline-none text-2xl text-zinc-600 w-full"
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
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};
