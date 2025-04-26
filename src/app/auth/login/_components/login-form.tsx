"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
export default function LoginForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
    const response = await signIn("credentials", {
      callbackUrl: "/",
      redirect: false,
      email: values.email,
      password: values.password,
    });
    console.log(response);
  };
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-1/2 ">
        <form className="space-y-9" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              id="email"
              className="h-12"
            />
          </div>
          {/* Password */}
          <div>
            <Input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              id="password"
              className="h-12"
            />
          </div>

          {/* button */}
          <Button
            type="submit"
            className="w-full text-[16px] bg-[#4461F2] rounded-2xl h-12 hover:bg-[#4461F2]"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
