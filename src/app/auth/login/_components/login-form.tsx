"use client";
import React from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { LoginSchema, LoginInputs } from "@/lib/schemes/auth-schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function LoginForm() {
  const form = useForm<LoginInputs>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (values) => {
    console.log(values);

    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (response?.error) {
      toast.error(response.error);
    } else if (response?.ok) {
      toast.success("Login successful");
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-1/2 ">
        <Form {...form}>
          <form className="space-y-9" onSubmit={form.handleSubmit(onSubmit)}>
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

            {/* button */}
            <Button
              type="submit"
              className="w-full text-[16px] bg-[#4461F2] rounded-2xl h-12 hover:bg-[#4461F2]"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
