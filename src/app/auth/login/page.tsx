import React from "react";
import LoginForm from "./_components/login-form";
export default function page() {
  return (
    <>
      {/* title */}
      <h2 className="font-bold text-2xl ms-[25%] mt-14">Sign in</h2>
      {/* Form */}
      <LoginForm />
    </>
  );
}
