"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AppInput from "@/src/themes/components/app-input/app-input";
import AppCheckbox from "@/src/themes/components/app-checkbox/app-checkbox";
import AppInputPassword from "@/src/themes/components/app-input-password/app-input-password";
import AppButton from "@/src/themes/components/app-button/app-buttonn";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign in:", { email, password, rememberMe });
    router.push("/dashboard");
  };

  return (
    <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-8 lg:pl-[72px] lg:pr-[72px]">
      <div className="w-full max-w-md">
        <h1 className="font-bold text-[20px] lg:text-[20px] sm:text-[22px] text-gray-900 mb-8 sm:mb-[20px]">
          Welcome back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-[20px]">
          <div>
            <AppInput
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <AppInputPassword
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              className="text-black"
            />
          </div>

          <AppCheckbox
            id="remember"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="!text-black"
          />

          <AppButton label="Sign in" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
