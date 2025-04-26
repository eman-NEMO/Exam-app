"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center mt-8">
    <div className=" w-1/2">
      <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
        {/* first name  */}
        <div>
         
          <Input
            {...register("firstName")}
            type="firstName"
            placeholder="First Name"
            id="firstName"
            className="h-12"
          />
        </div>
        {/* last name  */}
        <div>
      
          <Input
            {...register("lastName")}
            type="lastName"
            placeholder="Last Name"
            id="lastName"
            className="h-12"
          />
        </div>
        {/* email */}
        <div>
         
          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
            id="email"
            className="h-12"
          />
        </div>

        {/* Password */}
        <div>
         
          <Input
            {...register("password")}
            type="password"
            placeholder="password"
            id="password"
            className="h-12"
          />
        </div>
        {/* confirm  Password */}
        <div>
        
          <Input
            {...register("confirmPassword")}
            type="confirmPassword"
            placeholder="confirm password"
            id="confirmPassword"
            className="h-12"
          />
        </div>

        {/* button */}
        <Button type="submit" className="w-full text-[16px] bg-[#4461F2] rounded-2xl h-12 hover:bg-[#4461F2]">
          Create Account
        </Button>
      </form>
    </div>
    </div>
  );
}
