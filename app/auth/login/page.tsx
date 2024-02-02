import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-11/12  bg-white rounded-xl max-w-xs p-4">
      <h1 className="text-2xl font-bold">Login Below</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
