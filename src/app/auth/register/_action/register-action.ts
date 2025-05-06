import { JSON_HEADER } from "@/lib/constants/api.constant";
import { RegisterInputs } from "@/lib/schemes/auth-schemes";
import { RegisterResponse } from "@/lib/types/auth";
export const Register = async (RegisterInputs:RegisterInputs)=>{
  console.log(`${process.env.API}/auth/signup`)
    const response = await fetch(`${process.env.API}/auth/signup`,{
    
        method:'POST',
        body:JSON.stringify(RegisterInputs),
        headers: {...JSON_HEADER},
    })
    console.log(response)
   
    const payload :APIResponse<RegisterResponse>  = await response.json();
   console.log(payload)
    if ("code" in payload) {
        const errorMessage =
          payload.message || "Something went wrong ";
        throw new Error(errorMessage);
      }
      return payload;   
}