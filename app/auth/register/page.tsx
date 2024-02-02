import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="w-11/12  bg-white rounded-xl max-w-xs p-4">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
