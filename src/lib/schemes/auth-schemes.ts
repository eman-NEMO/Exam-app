import {z} from "zod"

// login schema 
export const LoginSchema = z.object({
    email:z.string({required_error:"Email is required"})
    .email("please Enter valid Email"),
    password:z.string({required_error:"Password is required"})
    
})


export type LoginInputs = z.infer<typeof LoginSchema>


// password validation
const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  );
  // password schema
export const RegisterSchema = z.object({
    username:z.string({required_error:"First Name is required"})
    .min(1,"please Enter valid Name ")
    .max(10, "Max string len 10 chars"),

    firstName:z.string({required_error:"First Name is required"})
    .min(1,"please Enter valid Name ")
    .max(10, "Max string len 10 chars"),

    lastName:z.string({required_error:"Last Name is required"})
    .min(1,"please Enter valid Name ")
    .max(10, "Max string len 10 chars"),

    email:z.string({required_error:"Email is required"})
    .email("please Enter valid Email"),

    password:z.string({required_error:"Password is required"})
    .min(1,"password is required")
    .max(20, "Password is too long")
    .regex(passwordValidation,"Not valid password"),

    rePassword:z.string({required_error:"Password is required"}),

    phone:z.string({required_error:"phone is required"})
    .regex(/^01[0125][0-9]{8}$/,"Not match regex")

}).refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],// where error appear 
});
// refine is object have all data to check specific condition

// i take it in notes 
export type RegisterInputs=z.infer<typeof RegisterSchema>