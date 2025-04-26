"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function ForgetPassword() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: any) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center items-center mt-8">
    <div className=" w-1/2">
      <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <div>
        
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            id="email"
            className="h-12"
          />
        </div>
        {/* button */}
        <Button type="submit" className="w-full text-[16px] bg-[#4461F2] rounded-2xl h-12 hover:bg-[#4461F2]">
          sign in
        </Button>
      </form>
    </div>
    </div>
  );
}
