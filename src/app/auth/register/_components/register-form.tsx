"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import useRegister from "../_hooks/register-hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {
  LoginSchema,
  LoginInputs,
  RegisterInputs,
  RegisterSchema,
} from "@/lib/schemes/auth-schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function RegisterForm() {
  const { isPending, error, register } = useRegister();
  const form = useForm<RegisterInputs>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterInputs) => {
    register(values);
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <div className=" w-1/2">
        <Form {...form}>
          <form className="space-y-9" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="firstName"
                      placeholder="Enter your firstName"
                      id="firstName"
                      className="h-12"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="lastName"
                      placeholder="Enter your lastName"
                      id="lastName"
                      className="h-12"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      className="h-12"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="Password"
                      placeholder="Enter your confirmPassword"
                      id="confirmPassword"
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* button */}
            <Button
              type="submit"
              className="w-full text-[16px] bg-[#4461F2] rounded-2xl h-12 hover:bg-[#4461F2]"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
