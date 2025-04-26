import React from "react";
import ForgetPassword from "./_components/forget-password-form";

export default function page() {
  return (
    <>
      {/* title */}
      <h2 className="font-bold text-2xl ms-[25%] mt-24">Forget Your Password</h2>
      <ForgetPassword />
    </>
  );
}
