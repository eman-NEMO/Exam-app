import {z} from "zod"

export const LoginSchema = z.object({
    email:z.string({required_error:"Email is required"})
    .email("please Enter valid Email"),
    password:z.string({required_error:"Password is required"})
    
})

export type LoginInputs = z.infer<typeof LoginSchema>