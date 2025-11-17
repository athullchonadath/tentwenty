import React from "react";
import { Metadata } from "next";
import SignIn from "./sign-in/page";

export const metadata: Metadata = {
  title: "Tentwenty | Login",
};

const Login: React.FC = () => {
  return (
    <SignIn/>
  );
};

export default Login;
